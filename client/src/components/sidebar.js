import React,{Component} from "react";
import Display from "./display";
import {deleteFile,createFile,updateFile} from "../store/actions/editor";
class Sidebar extends Component{
    state = {
        buttonStatus: null,
        body: "",
        currentId: null,
        name: "",
    }

    handleChangeFromAnotherComponent = (body,id,name)=>{
        if(this.state.buttonStatus === "edit"){
            alert("Please save your file, otherwise progress will lost");
        }else{
            this.setState({body,currentId: id,name},()=>{
                console.log(this.state);
            });
        }
    }

    handleInputChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleChange = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        switch(name){
            case "edit":
                this.setState({buttonStatus: "edit"});
                break;
            case "delete":
                //fire the request for delete
                deleteFile(this.state.currentId);
                this.setState({buttonStatus: null,body: "",name:"",currentId: null});
                break;
            case "save":
                //fire save request
                const {body,name,currentId} = this.state;
                //this is to detect if the file is new or just old file is updated
                var flag;
                this.props.allfiles.forEach(file=>{
                    if(file._id === currentId){
                        flag="exist";
                    }
                })

                if(flag === "exist"){
                    //update the file
                    updateFile(currentId,{name,body});
                }else{
                    //create new file
                    createFile({name,body});
                }
                this.setState({buttonStatus: null});
        }
    }

    addnew = ()=>{
        this.setState({buttonStatus: "edit",body: "",name:"",currentId: null});
    }
    render(){
        const allfile = this.props.allfiles.map(file=>{
            return(
                <Display
                    key={file._id}
                    name={file.name}
                    id={file._id}
                    body={file.body}
                    handleChange={this.handleChangeFromAnotherComponent}
                />
            )
        })
        const {body,buttonStatus,name} = this.state;
        return (
            <div className="wholeEditor">
                <div className="sidebar">
                    <h3 style={{color:"white"}}>List of files</h3>
                    <hr/>
                    {allfile}
                    <button 
                    className="btn-primary add-new"
                    onClick={this.addnew}
                    >New File</button>
                </div>
                <div className="editor">
                    {
                        buttonStatus === "edit"?(
                            <div>
                            <label style={{color: "white"}}>Name:</label>
                            <input type="text" style={{width: "10%"}} value={name} onChange={this.handleInputChange} name="name"/>
                            <textarea
                            value={body}
                            onChange={this.handleInputChange}
                            name="body"
                            />
                            </div>
                        ):(
                            <div>
                            <label style={{color: "white"}}>Name:</label>
                            <input type="text" style={{width: "10%"}} readOnly value={name} name="name"/>
                            <textarea disabled
                            value={body}
                            />
                            </div>
                        )
                    }
                    <div className="buttons">
                        <button className="btn-warning" onClick={this.handleChange} name="edit">Edit</button>
                        <button className="btn-success" onClick={this.handleChange} name="save">Save</button>
                        <button className="btn-danger" onClick={this.handleChange} name="delete">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;