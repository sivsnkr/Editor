import React from "react";

export default function(props){
    const {isAuthenticated} = props;
    return(
        <div className="homepage">
            {isAuthenticated === true ?(
                <div>He</div>
            ):(
                <div className="welcome-style">
                    <h1>Welcome to Code BOX</h1>
                </div>
            )}
        </div>
    )
}