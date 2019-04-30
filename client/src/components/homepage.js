import React from "react";
import {Sidebar} from './sidebar';
import {Editor} from "./editor";
export default function(props){
    const {isAuthenticated} = props;
    return(
        <div className="homepage">
            {isAuthenticated === true ?(
                <div className="homePage">
                    <Sidebar allfiles={props.allfiles}/>
                    
                </div>
            ):(
                <div className="welcome-style">
                    <h1>Welcome to Code BOX</h1>
                </div>
            )}
        </div>
    )
}