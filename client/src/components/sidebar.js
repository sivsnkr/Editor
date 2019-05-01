import React,{Component} from "react";
import Display from "./display";
import {deleteFile} from "../store/actions/editor";
class Sidebar extends Component{
    state = {
        buttonStatus: null,
        body: "",
        currentId: null,
    }

    handleChangeFromAnotherComponent = (body,id)=>{
        if(this.state.buttonStatus === "edit"){
            alert("Please save your file, otherwise progress will lost");
            this.setState({buttonStatus: null});
        }
        this.setState({body,currentId: id},()=>{
            console.log(this.state);
        });
    }

    handleInputChange = (e)=>{
        this.setState({body: e.target.value});
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
                this.setState({buttonStatus: null});
                break;
            case "save":
                //fire save request
                this.setState({buttonStatus: null});
        }
    }

    addnew = ()=>{
        this.setState({body:"",buttonStatus:"edit"});
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
        const {body,buttonStatus} = this.state;
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
                            <textarea
                            value={body}
                            onChange={this.handleInputChange}
                            />
                        ):(
                            <textarea disabled
                            value={body}
                            />
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