const express = require("express"),
    app = express.Router(),
    db = require("./db"),
    jwtToken = require("jsonwebtoken");
//using jsonwebtoken to maintain the sesson

app.post("/signin",async (req,res,next)=>{
    try{
        const {username,password} = req.body;
        const user = await db.user.findOne({username});
        let passwordCheck = await user.comparePassword(password);
        if(passwordCheck){
            const _id = user._id;
            const token = jwtToken.sign({
                _id,
                username
            },process.env.SECRET_KEY);
            return res.status(200).json({
                _id,
                username,
                token
            })
        }else{
            return next({
                status: 401,
                message: "Wrong username or password"
            })
        }
    }catch(err){
        err.message = "Not able to signin!";
        return next({
            ...err,
            status: 400,
            message: err.message
        });
    }
})

app.use("/signup", async (req,res,next)=>{
    try{
        const user = await db.user.create(req.body);
        const {_id,username} = user;
        const token = jwtToken.sign({
            _id,
            username
        },process.env.SECRET_KEY);
        return res.status(200).json({
            _id,
            username,
            token
        })
    }catch(err){
        if(err.code === 11000){
            err.message = "username already exist!"
        }else
            err.message = "Not able to signup!";
        return next({
            ...err,
            status: 400,
            message: err.message
        });
    }
})

module.exports = app;