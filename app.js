import express from "express"
import { config } from "dotenv"
import { encryption, createUser, checkUser, checkListOfNum } from "./functions.js" 

config()
const app  = express()
app.use(express.json())


// create Middleware general
app.use("/", (req, res, next) => {
   console.log(req.method, req.path)
   next()
})



app.post("/signup", async (req, res)=>{
    const username = req.body.username
    const newPassWord = await encryption(req.body.password)
    await createUser(username ,newPassWord)
    res.send("good user")
})



app.use("/verify", async (req, res, next)=>{
    const bool = await checkUser(req.body.username, req.body.password)
    if(bool){
     next()
    }
    res.status(404).send("The username or password is incorrect!")
})



app.post("/verify/decode-message",async (req, res)=>{
    const check_list_of_num = checkListOfNum(req.body.message)
    res.json({check_list_of_num}) 
})




app.listen(process.env.PORT,()=> {
    console.log(`app listen on http://localhost:${process.env.PORT}`);
})





