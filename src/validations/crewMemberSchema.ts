import * as z from "zod";
import type { CrewMember } from "../types/CrewMember";


export const crewMemberSchema: z.ZodType<CrewMember> = z.object({
    id: z.number(),
    name: z.string(),
    teamId: z.number(),
    status: z.enum(["disponible", "en mission", "indisponible"]),
    role: z.string().optional(),
    skills: z.array(z.string())
});
