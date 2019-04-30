import React,{useState} from "react";

export default function(props){
    const {type} = props;
    //react hooks for handling class like in function
    var [username,handleUsername] = useState("");
    var [password,handlePassword] = useState("");

    const handleClick = function(e){
        if(e.target.name === "username"){
            handleUsername(e.target.value);
        }else{
            handlePassword(e.target.value);
        }
    }

    const handleSubmit = function(e){
        e.preventDefault();
        console.log(username);
        console.log(password);
        const userData = {
            username,
            password
        }
        props.authenticate(type,userData)
        .then(res=>{
            props.history.push("/");
        });
        username="";
        password="";
    }
    return(
        <form className="authform">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                className="form-control" 
                id="exampleInputEmail1"
                placeholder="Enter email"
                onChange={handleClick}
                name="username"
                value={username}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handleClick}
                name="password"
                value={password}
                />
            </div>
            <button type="submit" 
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
            >{type}</button>
        </form>
    )
}