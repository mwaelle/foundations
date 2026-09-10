import type { CrewMember } from "../types/CrewMember";
import type { MissionState } from "../types/MissionState";
import { createCrewCards } from "../crew";
import { describeMissionState } from "../mission";


//fonction permettant de charger les membres de l'équipage, de les tranformer en fiches d'affichage et de renvoyer l'état de la mission
export const loadMissionState = async (loader: () => Promise<Array<CrewMember>>): Promise<MissionState> => {
    const loadingState : MissionState = { status: "loading" };
    console.log(describeMissionState(loadingState));

    try {

        const crewMembers = await loader(); //récupère le tableau de membres
        const data = createCrewCards(crewMembers); //crée un tableau des fiches d'affichage de chaque membre de l'équipage

        const success : MissionState = {
            status : "success",
            data : data
        };
        console.log(describeMissionState(success));
        return success;

    } catch (erreur) {

        const error : MissionState = {
            status : "error",
            message : erreur instanceof Error ? erreur.message : "Erreur inconnue"
        };
        console.log(describeMissionState(error));
        return error;

    }
};