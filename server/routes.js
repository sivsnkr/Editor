const express = require("express");
const app = express.Router();
const db = require("./db");

app.get("/",async ()=>{
    //get all the files from database

})

app.post("/create",async(req,res,next)=>{
    //for creating the file
    try{
        const file = await db.editor.create(req.body);
        const {name,_id} = file;
        return res.status(200).json({
            _id,
            name
        })
    }catch(err){
        err.message = "Not able to create the file!";
        return next(err);
    }
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