import bcrypt from "bcrypt"
import { supabase } from "./db.js"

export async function insertUser(username, password) {
    const hash = await bcrypt.hash(password, 10);
    const {data, error} = await supabase
    .from('users')
    .insert([{username: username, password: hash}])
    .select();
    // console.log(data);
    return data;
}



export async function verifyUser(username, password){
    const {data, error} = await supabase
    .from('users')
    .select("*")
    .eq("username", username)
    .single()

    const isMatch = await bcrypt.compare(password, data.password);
    return isMatch
}
