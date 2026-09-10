import type { Status } from "./Status"

export type CrewMember = {
    id : number;
    name : string;
    teamId : number;
    status : Status;
    role? : string;
    skills : Array<string>;
}