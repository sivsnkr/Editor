const mongoose = require("mongoose");
//connecting to the database
mongoose.connect("mongodb://localhost/Editor",{useNewUrlParser: true});
//for debugging purpose, shows the command run in the database
mongoose.set("debug",true);
//working in the mongoose with js promise
mongoose.Promise = Promise;

const bcrypt = require("bcrypt");

//making the schema for the editor
const editorSchema = mongoose.Schema({
    creator: String,
    name: String,
    body: String,
});
const editor = mongoose.model("EditorFiles", editorSchema);
//user schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: String,
});

//hashing the password before save
userSchema.pre("save",async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }else{
            const hashedPassword = await bcrypt.hash(this.password,10);
            this.password = hashedPassword;
            return next();
        }
    }catch(err){
        err.message = "Not able to hash password!"
        return next(err);
    } 
})

//method for comparing the password
userSchema.methods.comparePassword = async function(input,next){
    try{
        const compare = await bcrypt.compare(input,this.password);
        return compare; 
    }catch(err){
        err.message = "Password is incorrect!"
        return next(err);
    }
}
const user = mongoose.model("users", userSchema);
//exporting the module
module.exports = {
    user,
    editor
};