const mongoose = require("mongoose");
//connecting to the database
mongoose.connect("mongodb://localhost/Editor");
//for debugging purpose, shows the command run in the database
mongoose.set("debug",true);
//working in the mongoose with js promise
mongoose.Promise = Promise;


//making the schema for the editor
const editorSchema = mongoose.Schema({
    name: String,
    body: String,
});

//exporting the module
module.exports = mongoose.model("EditorFiles", editorSchema);