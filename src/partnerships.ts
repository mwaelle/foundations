import type { Team } from "./types/Team";


//fonction permettant de renvoyer une nouvelle équipe sur la base de l'ancienne, en ajoutant simplement l'identifiant du partenaire s'il n'y est pas déjà
export const addPartner = (team : Team, partnerId : number) : Team => {
    if (team.partners.includes(partnerId)) {
        return team;
    }
    return {
        ...team,
        partners : [...team.partners, partnerId]
    };
}

//fonction permettant de renvoyer un tableau des équipes, en ajoutant l'identifiant du partenaire à l'équipe dont l'identifiant est passé en paramètre
export const updateTeamPartnership = (allTeams : Array<Team>, teamId : number, partnerId : number) : Array<Team> => {
    return allTeams.map((team) => {
        if (team.id === teamId) {
            return addPartner(team, partnerId); 
        }
        return team;
    });
}

//fonction permettant de renvoyer une nouvelle équipe sur la base de l'ancienne, en retirant simplement l'identifiant du partenaire passé en paramètre
export const removePartner = (team : Team, partnerId : number) : Team => {
    return {
        ...team,
        partners : team.partners.filter((partner) => partner !== partnerId)
    };
}
