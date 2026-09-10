import { describe, expect, test } from "bun:test";
import { getDisplayName } from "../src/crew";
import { hasSkill } from "../src/crew";
import type { CrewMember } from "../src/types/CrewMember";


//tests sur la fonctions getDisplayName
describe("getDisplayName", () => {
    test("affiche le rôle lorsqu'il est défini", () => {
        const member: CrewMember = {
            id: 2,
            name: "Haskell Curry",
            teamId: 1,
            status: "disponible",
            role: "Commandant de mission",
            skills: ["communication"]
        };
        expect(getDisplayName(member)).toBe(
            "Haskell Curry : Commandant de mission"
        );
    });

    test("utilise une valeur par défaut lorsque le rôle est absent", () => {
        const member: CrewMember = {
            id: 1,
            name: "Alonzo Church",
            teamId: 1,
            status: "disponible",
            skills: ["navigation", "ingénierie"]
        };
        expect(getDisplayName(member)).toBe(
            "Alonzo Church : Sans rôle"
        );
    });
});


//tests sur la fonctions hasSkill
describe("hasSkill", () => {
    test("renvoie true lorsque la compétence existe", () => {
        const member: CrewMember = {
            id: 1,
            name: "Alonzo Church",
            teamId: 1,
            status: "disponible",
            skills: ["navigation", "ingénierie"]
        };
        expect(hasSkill(member, "navigation")).toBe(true);
    });

    test("renvoie false lorsque la compétence n'existe pas", () => {
        const member: CrewMember = {
            id: 1,
            name: "Alonzo Church",
            teamId: 1,
            status: "disponible",
            skills: ["navigation", "ingénierie"]
        };
        expect(hasSkill(member, "communication")).toBe(false);
    });
});
