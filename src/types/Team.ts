import type { BaseLocation } from "./BaseLocation";

export type Team = {
    id : number;
    name : string;
    base : BaseLocation;
    title : string;
    memberCount : number;
    partners : Array<number>;
}