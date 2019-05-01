import React,{Component} from "react";
import Display from "./display";
class Sidebar extends Component{
    state = {
        buttonStatus: null,
        body: "",
        currentId: null,
    }

    handleChangeFromAnotherComponent = (body,id)=>{
        this.setState({body,currentId: id},()=>{
            console.log(this.state);
        });
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
                </div>
                <div className="editor">
                    {
                        buttonStatus === "edit"?(
                            <textarea
                            value={body}
                            />
                        ):(
                            <textarea disabled
                            value={body}
                            />
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

export default Sidebar;