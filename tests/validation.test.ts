import { describe, expect, test } from "bun:test";
import { parseCrewMembersResponse } from "../src/validations/parseCrewMembersResponse";


//tests sur la fonctions parseCrewMembersResponse
describe("parseCrewMembersResponse", () => {
    test("l'enveloppe fournie est acceptée et la fonction renvoie son tableau data", () => {
        const validResponse = {
            success: true,
            message: "Réponse valide",
            data: [
                {
                    id: 1,
                    name: "Alonzo Church",
                    teamId: 1,
                    status: "disponible" as const,
                    skills: ["navigation", "ingénierie"]
                },
                {
                    id: 2,
                    name: "Haskell Curry",
                    teamId: 1,
                    status: "disponible" as const,
                    role: "Commandant de mission",
                    skills: ["communication"]
                }
            ]
        };

        expect(parseCrewMembersResponse(validResponse)).toEqual(validResponse.data);
    });

    test("une réponse dans laquelle un membre possède un statut inconnu est refusée", () => {
        const invalidResponse = {
            success: true,
            message: "Réponse invalide",
            data: [
                {
                    id: 1,
                    name: "Alonzo Church",
                    teamId: 1,
                    status: "disponible",
                    skills: ["navigation", "ingénierie"]
                },
                {
                    id: 2,
                    name: "Haskell Curry",
                    teamId: 1,
                    status: "inconnu",
                    role: "Commandant de mission",
                    skills: ["communication"]
                }
            ]
        };

        expect(() => parseCrewMembersResponse(invalidResponse)).toThrow("La réponse transmise est invalide");
    });
});