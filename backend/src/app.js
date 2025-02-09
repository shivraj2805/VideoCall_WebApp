import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";

import  userRoutes  from "./routes/user.routes.js";

const app= express();
const server= createServer(app);
const io = connectToSocket(server);


app.set("port" , (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit:"40kb" , extended: true}));

app.use("/api/v1/users",userRoutes);

const start = async () =>{
    app.set("mongo_useer")
         const connectionDb = await mongoose.connect("mongodb+srv://darekar1411:EjZoLNXkZt99LBNy@cluster0.tloy9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

         console.log(`MONGO Connected DB HOST : ${connectionDb.connection.host}`)
    server.listen(app.get("port") , ()=>{
        console.log('Listening on port 8000');
    });
};

start();