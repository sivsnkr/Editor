const mongoose = require("mongoose");
//connecting to the database
mongoose.connect("mongodb://localhost/Editor");
//for debugging purpose, shows the command run in the database
mongoose.set("debug",true);
//working in the mongoose with js promise
mongoose.Promise = Promise;


//making the schema for the editor
const editorSchema = mongoose.Schema({
    creator: mongoose.Schema.Types.ObjectId,
    name: String,
    body: String,
});

//user schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

//hashing the password before save
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }else{
        const hashedPassword = await bcrypt.hash(this.password,10);
        this.password = hashedPassword;
        return next();
    }
})

//method for comparing the password
userSchema.methods.comparePassword = async (input,next)=>{
    const compare = await bcrypt.compare(input,this.password);
    return compare;

}

//exporting the module
module.exports = mongoose.model("EditorFiles", editorSchema);