import type { MissionState } from "./types/MissionState";

//fonction permettant de renvoyer le texte correspondant au statut de la mission
export const describeMissionState = (state : MissionState) : string => {
    switch (state.status) {
        case "loading" :
            return "Chargement de l'équipage…";
        case "success" :
            return state.data.length + " membre(s) dans l'équipage";
        case "error" :
            return "Erreur : " + state.message; 
        default : {
            const unreachable : never = state;
            return unreachable;
        }
    }
}
    