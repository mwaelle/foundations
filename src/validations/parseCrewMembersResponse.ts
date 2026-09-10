import { crewMembersResponseSchema } from "./crewMembersResponseSchema";


//fonction permettant de renvoyer le tableau data contenu dans l'enveloppe si tout va bien, une erreur sinon
export const parseCrewMembersResponse = (valeur : unknown) => {
    const result = crewMembersResponseSchema.safeParse(valeur);
    if (!result.success) {
        throw new Error("La réponse transmise est invalide");
    }
    return result.data.data;
}