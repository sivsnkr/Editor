const express = require("express");
const app = express.Router();
const db = require("./db");

app.get("/",async ()=>{
    //get all the files from database

})

app.post("/edit/:id", async ()=>{
    //for editing the file
})

app.get("/delete/:id", async ()=>{
    //for deleting the file the file
})

app.post("/post/:id", async ()=>{
    //for saving the file
})


module.exports = app;