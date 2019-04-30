require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port||3001;
const error = require("./error");
const routes = require("./routes"),
    user = require("./user");
//making the route url json type
app.use(express.json());
app.use(cors());

//all the routes goes here
app.use("/file",routes);
app.use("/user",user);
//for error handling
app.use(error);
//listening to server
app.listen(port,()=>{
    console.log("Server is running....");
})