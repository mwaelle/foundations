import type { CrewMember } from "../types/CrewMember";
import { parseCrewMembersResponse } from "./parseCrewMembersResponse";


//fonction permettant de renvoyer un tableau des membres d'équipage à partir d'une URL si la réponse est ok
export const loadCrewMembers = async (url: string): Promise<Array<CrewMember>> => {
    const response: Response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Échec du chargement : ${response.status}`);
    }
    
    const payload: unknown = await response.json();
    return parseCrewMembersResponse(payload);
};