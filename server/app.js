require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port||3001;
const error = require("./error");
//making the route url encoded type
express.urlencoded({extended: true});

//all the routes goes here
app.use("/file");

//for error handling
app.use(error);
//listening to server
app.listen(port,()=>{
    console.log("Server is running....");
})