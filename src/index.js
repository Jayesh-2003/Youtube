import dotenv from "dotenv"
import expres from "express";
import { db_Conn } from "./db/dbConn.js";
import { app } from "./app.js"
dotenv.config({
    path:'./env'
})
const PORT=process.env.PORT||4040
db_Conn()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Your Server is running on http://localhost:${PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed ",err)
})