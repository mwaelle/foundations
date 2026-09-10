import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";

import type { CrewMember } from "./types/CrewMember";
import type { CrewCard } from "./types/CrewCard";
import type { Team } from "./types/Team";
import type { MissionState } from "./types/MissionState";

import { getDisplayName } from "./crew";
import { hasSkill } from "./crew";
import { isAvailable } from "./crew";
import { createCrewCards } from "./crew";

import { addPartner } from "./partnerships";
import { updateTeamPartnership } from "./partnerships";

import { describeMissionState } from "./mission";

import { findById } from "./collections";
import { replaceById } from "./collections";


console.log("Le centre de contrôle de Foundations est opérationnel.");


//1.3 Destructurer un objet
const equipe1 = teams[0];
if (equipe1) {
    const {name, title} = equipe1; //récupère seulement le nom et le titre de l'équipe
    console.log(name, " : ", title);
}
console.table(teams);


//2.3 Trouvez Alonzo Church avec find
const alonzo = crewMembers.find(
    (crewMember) => crewMember.name === "Alonzo Church"
);
if (alonzo) {
    console.log(getDisplayName(alonzo));
}

//2.3 Sélectionnez les membres disponibles avec filter et isAvailable
const dispo = crewMembers.filter( //tableau des membres dont le statut est "disponible"
    (crewMember) => isAvailable(crewMember)
);
console.log(dispo.length);

//2.3 Sélectionnez les spécialistes de la communication avec filter et hasSkill
const comm = crewMembers.filter( //tableau des membres qui possède la compétence "communication"
    (crewMember) => hasSkill(crewMember, "communication")
);
console.log(comm.length);

//2.3 Construisez avec map un tableau contenant le nom d'affichage de chaque membre
const noms = crewMembers.map( //applique la fonction getDisplayName à chaque membre de l'équipage
    (crewMember) => getDisplayName(crewMember)
);
console.log(noms);


//3.3 Transformer les données
const crewCards : Array<CrewCard> = createCrewCards(crewMembers); //crée un tableau contenant les fiches de chaque membre de l'équipage
console.table(crewCards);


//4.2 Ajouter une collaboration à une équipe
if (equipe1) {
    console.log(equipe1);
    const newTeam : Team = addPartner(equipe1, 2); //crée une nouvelle équipe à partir de l'originale en ajoutant un partenaire
    console.log(newTeam);
}


//4.3 Mettre à jour le tableau complet
console.table(teams);
const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2); 
console.table(withAurorePartnership);
const partnerTeams: Array<Team> = updateTeamPartnership(withAurorePartnership, 2, 1);
console.table(partnerTeams);
console.table(teams);


//5.2 Restreindre le type par une condition
const loadingState: MissionState = { status: "loading" };
console.log(describeMissionState(loadingState));
const successState: MissionState = { status: "success", data: crewCards };
console.log(describeMissionState(successState));
const errorState: MissionState = { status: "error", message: "Communication avec la base interrompue" };
console.log(describeMissionState(errorState));


//6.2 Cherchez l'équipe d'identifiant 3
const equipe3 : Team | undefined = findById(teams, 3);
console.log(equipe3);

//6.2 Cherchez le membre d'équipage d'identifiant 5
const membre5 : CrewMember | undefined = findById(crewMembers, 5);
console.log(membre5);

//6.2 Cherchez la fiche d'équipage d'identifiant 2
const fiche2 : CrewCard | undefined = findById(crewCards, 2);
console.log(fiche2)


//6.3 Manipuler le générique
const membreR : CrewMember = { //avec un membre d'équipage
    id : 1,
    name : "Maëlle",
    teamId : 1,
    status : "disponible",
    skills : ["informatique"]
}
console.table(replaceById(crewMembers, membreR));

//6.3 Manipuler le générique
const equipeR : Team = { //avec une équipe
    id : 1, 
    name : "Crépuscule",
    base : "Europe",
    title : "Pour l'avenir",
    memberCount : 40,
    partners: []
}
console.table(replaceById(teams, equipeR));