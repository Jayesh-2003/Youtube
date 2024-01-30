import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const db_Conn = async()=>{
    
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected DB HOST:${connectionInstance.connection.host} `)
    } catch (error) {
        console.log("MongoDB Connection Failed : "+ error)
        process.exit(1)
    }
}
export { db_Conn }