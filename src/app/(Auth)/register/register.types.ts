import { schema } from "./register.schema";
import * as zod from 'zod';


export type RegisterFormType = zod.infer<typeof schema>;