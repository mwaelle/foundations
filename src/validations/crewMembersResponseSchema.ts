import * as z from "zod";
import { crewMemberSchema } from "./crewMemberSchema";


export const crewMembersResponseSchema = z.object({
    success: z.literal(true),
    message: z.string(),
    data: z.array(crewMemberSchema)
});
