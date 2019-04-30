import React from "react";

export default function(props){
    const isAuhenticated = props;
    return(
        <div>
            {isAuhenticated === true ?(
            <div/>
            ):(
                <div style={{background: "black"}}>
                    <h1 style={{marginTop: "40%",marginLeft: "auto"}}>Hello</h1>
                </div>
            )}
        </div>
    )
}