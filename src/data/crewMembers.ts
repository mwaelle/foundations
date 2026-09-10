import type { CrewMember } from "../types/CrewMember";

export const crewMembers : Array<CrewMember> = [
    {
        id : 1,
        name : "Alonzo Church",
        teamId : 1,
        status : "disponible",
        skills : ["navigation", "ingénierie"]
    },
    {
        id : 2,
        name : "Haskell Curry",
        teamId : 1,
        status : "disponible",
        role : "Commandant de mission",
        skills : ["communication"]
    },
    {
        id : 3,
        name : "John McCarthy",
        teamId : 3,
        status : "disponible",
        role : "Directeur de vol",
        skills : ["stratégie", "communication"]
    },
    {
        id : 4,
        name : "John Backus",
        teamId : 4,
        status : "indisponible",
        skills : ["communication"]
    },
    {
        id : 5,
        name : "Robin Milner",
        teamId : 6,
        status : "disponible",
        role : "Pilote",
        skills : ["navigation", "pilotage"]
    },
    {
        id : 6,
        name : "Eugenio Moggi",
        teamId : 5,
        status : "en mission",
        skills : ["recherche"]
    }
];
