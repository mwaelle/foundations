import { describe, expect, test } from "bun:test";
import { describeMissionState } from "../src/mission";
import type { MissionState } from "../src/types/MissionState";


//tests sur la fonctions describeMissionState
describe("describeMissionState", () => {
    test("affiche un message de chargement si le statut est loading", () => {
        const loadingState: MissionState = { status: "loading" };
        expect(describeMissionState(loadingState)).toBe(
            "Chargement de l'équipage…"
        );
    });

    test("affiche un message avec le nombre de membres dans l'équipage si le statut est success", () => {
        const successState: MissionState = { 
            status: "success", 
            data: 
            [
                {
                    id: 1,
                    label: "Alonzo Church : Sans rôle",
                    teamName: "Aurore",
                    isAvailable: true,
                }, {
                    id: 2,
                    label: "Haskell Curry : Commandant de mission",
                    teamName: "Aurore",
                    isAvailable: true,
                }, {
                    id: 3,
                    label: "John McCarthy : Directeur de vol",
                    teamName: "Kepler",
                    isAvailable: true,
                }, {
                    id: 4,
                    label: "John Backus : Sans rôle",
                    teamName: "Nova",
                    isAvailable: false,
                }, {
                    id: 5,
                    label: "Robin Milner : Pilote",
                    teamName: "Zénith",
                    isAvailable: true,
                }, {
                    id: 6,
                    label: "Eugenio Moggi : Sans rôle",
                    teamName: "Pulsar",
                    isAvailable: false,
                }
            ] 
        };
        expect(describeMissionState(successState)).toBe(
            "6 membre(s) dans l'équipage"
        );
    });

    test("affiche un message d'erreur si le statut est error", () => {
        const errorState: MissionState = { status: "error", message: "Communication avec la base interrompue" };
        expect(describeMissionState(errorState)).toBe(
            "Erreur : Communication avec la base interrompue"
        );
    });

    test("affiche le nombre de membres correspondant à la taille de data", () => {
        const successState: MissionState = { 
            status: "success", 
            data: 
            [
                {
                    id: 1,
                    label: "Alonzo Church : Sans rôle",
                    teamName: "Aurore",
                    isAvailable: true,
                }, {
                    id: 2,
                    label: "Haskell Curry : Commandant de mission",
                    teamName: "Aurore",
                    isAvailable: true,
                }
            ] 
        };
        expect(describeMissionState(successState)).toBe(
            "2 membre(s) dans l'équipage"
        );
    });
});