import React from "react";

export default function(props){
    const {name,body,id} = props;
    const handleClick = function(body,id){
        props.handleChange(body,id);
    }
    return(
        <div 
        className="sidebar-component"
        onClick={()=>handleClick(body,id)}
        >
            {name}
        </div>
    )
}