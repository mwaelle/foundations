import type { CrewMember } from "./types/CrewMember";
import type { Team } from "./types/Team";
import type { CrewCard } from "./types/CrewCard";

import { teams } from "./data/teams";


//fonction permettant de renvoyer la fiche d'affichage du membre
export const getDisplayName = (crewMember : CrewMember) : string =>
    crewMember.name + " : " + (crewMember.role ?? "Sans rôle");

//fonction permettant de renvoyer si le membre possède la compétence passée en paramètre
export const hasSkill = (crewMember : CrewMember, skill : string) : boolean =>
    crewMember.skills.includes(skill);

//fonction permettant de renvoyer si le membre est "disponible"
export const isAvailable = (crewMember : CrewMember) : boolean => {
    if (crewMember.status === "disponible") {
        return true;
    }
    return false;
}


//fonction permettant de renvoyer l'équipe correspondante à l'identifiant passé en paramètre si elle existe
export const findTeamById = (teamId : number) : Team | undefined => 
    teams.find((team) => team.id === teamId);

//fonction permettant de renvoyer le nom de l'équipe à laquelle appartient le membre passé en paramètre si elle existe
export const getTeamName = (crewMember : CrewMember) : string =>
    findTeamById(crewMember.teamId)?.name ?? "Equipe inconnue";

//fonction permettant de créer un tableau des fiches d'affichage des membres de l'équipage
export const createCrewCards = (members : Array<CrewMember>) : Array<CrewCard> =>
    members.map((crewMember) => ({
        id : crewMember.id,
        label : getDisplayName(crewMember),
        teamName : getTeamName(crewMember),
        isAvailable : isAvailable(crewMember)
    }));