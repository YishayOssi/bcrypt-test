import bcrypt from "bcrypt"
import { insertUser, verifyUser } from "./dal.js"



export async function encryption(password){
const hash = await bcrypt.hash(password, 10)
return hash
}




export async function createUser(username, password) {
    await insertUser(username, password)
}




export async function checkUser(username, password){
    return await verifyUser(username, password)
}


export function checkListOfNum(listOfNum){
    for(let i = 0; i<listOfNum.length-1; i++){
        const a = listOfNum[i]
        const b = listOfNum[i+1]
        if(a > b){
            return false
        }
    }
return true
}