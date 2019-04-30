const express = require("express"),
    app = express.Router(),
    db = require("./db"),
    jwtToken = require("jsonwebtoken");
//using jsonwebtoken to maintain the sesson

app.post("/signin",async (req,res)=>{
    
})

app.use("/signup", async (req,res)=>{
    try{
        const user = await db.user.create(req.body);
        const {_id,username} = user;
        const token = jwtToken.sign({
            _id,
            username
        },process.env.SECRET_KEY);
    }catch(err){
        err.message = "Not able to signup!";
        return next(err);
    }
})