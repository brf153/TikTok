import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Data from "./data.js"
import TikTok from "./database.js"

//app config
const app= express()
const port = 9000

//middlewares
dotenv.config({path:"./config.env"})
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()
})

//DB config
mongoose.connect(process.env.DBURI).then(()=>console.log("Database connected")).catch((err)=>console.log(err.message))

//api endpoints
app.get("/",(req,res)=>{
    res.status(200).send("Hello, welcome to TikTok")
})

app.get("/v1/posts",(req,res)=>{
    TikTok.find().then((response)=>res.status(200).send(response)).catch(err=>res.send(err))
})

app.post("/v1/posts",(req,res)=>{
    const dbVideos = req.body
    TikTok.create(dbVideos).then((response)=>{res.status(200).send(response)}).catch((e)=>console.log(e.message))
})

//listen
app.listen(port,()=>{
    console.log(`Server connected on port:`,port)
})