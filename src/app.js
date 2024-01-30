import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.on("Error",(err)=>{
    console.log("Error : ",err)
    throw(err)
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

export { app }