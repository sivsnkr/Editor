import React from "react";

export function Sidebar(props){
    const allfile = props.allfiles.map(file=>{
        return(
            <div className="fileName" 
            id={file._id} 
            onClick={(file._id)}
            style={{textAlign: 'center',border: "2px solid blue"}}
            >
                {file.name}
            </div>
        )
    })
    return (
        <div className="sidebar">
            <h3>List of files</h3>
            <hr/>
            {allfile}
        </div>
    )
}