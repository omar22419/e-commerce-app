import { schema } from "./login.schema";
import * as zod from "zod";

export type LoginFormType = zod.infer<typeof schema>;
