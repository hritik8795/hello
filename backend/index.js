import express from "express";
import atlasDB from "./db/conn.js";
const app =express()
import userRoutes from "./routes/userRoutes.js"

atlasDB()
app.use(express.json())
app.use("/user",userRoutes)
app.get("/",(req,res)=>{
    res.send("welcome to the home")
})

app.listen(5000,(req,res) =>{
    console.log("server is running  ")
})