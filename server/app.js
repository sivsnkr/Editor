const express = require("express");
const app = express();
const port = process.env.port||3001;
//making the route url encoded type
express.urlencoded({extended: true});

//all the routes goes here
app.use("/file");

//listening to server
app.listen(port,()=>{
    console.log("Server is running....");
})