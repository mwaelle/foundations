import type { BunFile } from "bun";
import type { CrewMember } from "../types/CrewMember";
import { parseCrewMembersResponse } from "./parseCrewMembersResponse";


const chemin = "src/data/crewMembers.json"; //chemin jusqu'au fichier json

//fonction permettant de renvoyer un tableau des membres d'équipage à partir d'un fichier json si la réponse est ok
export const loadCrewMembersFromFile = async (path: string = chemin): Promise<Array<CrewMember>> => {
    const bunFile : BunFile = Bun.file(path);

    if (!bunFile) {
        throw new Error(`Échec du chargement : fichier ${path} introuvable`);
    }
    
    const payload: unknown = await bunFile.json();
    return parseCrewMembersResponse(payload);
};