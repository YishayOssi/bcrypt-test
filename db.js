import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

export const supabase = createClient(process.env.DATA_API, process.env.SECRET_KEY)