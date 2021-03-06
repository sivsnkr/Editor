const express = require("express");
const app = express.Router();
const db = require("./db");

app.get("/allfile/:userid",async (req,res,next)=>{
    //get all the files from database
    try{
        var files = await db.editor.find({creator: req.params.userid});
        return res.status(200).json({files});
    }catch(err){
        err.message = "Not able to fetch the files";
        return next(err);
    }
})

app.get("/:id",async (req,res,next)=>{
    //get single file
    try{
        const file = await db.editor.findOne({_id: req.params.id});
        return res.status(200).json(file);
    }catch(err){
        err.message = "Not able to get the file"
        return next(err);
    }
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
        err.message = "Not able to create the file";
        return next(err);
    }
})

app.post("/edit/:id", async (req,res,next)=>{
    //for editing the file
    try{
        const file = await db.editor.findOne({_id: req.params.id});
        file.name = req.body.name;
        file.body = req.body.body;
        await file.save();
        return res.status(200).json(file);
    }catch(err){
        err.message = "Not able to edit the file, some error happenned"
        return next(err);
    }
})

app.get("/delete/:id", async (req,res,next)=>{
    //for deleting the file the file
    try{
        await db.editor.deleteOne({_id: req.params.id});
        return res.status(200).json({
            message: "File has been successfully deleted"
        });
    }catch(err){
        err.message = "Not able to delete the file, some error happenned"
        return next(err);
    }
})



module.exports = app;