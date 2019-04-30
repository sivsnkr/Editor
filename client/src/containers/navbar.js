import React ,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../store/actions/user";

class Navbar extends Component{
    render(){
        let {isAuthenticated} = this.props;
        const style={
            background: "black",
            display: "flex", 
            width: "100%",
            flexDirection: "row",
            fontSize: "30px"
        }
        const linkStyle ={
            marginLeft: "20px",
            color: "blue",
            textDecoration: "none"
        }
        return(
            <div style={style}>
                <Link to="/" style = {{color: "blue"}}>Code Box</Link>
                {isAuthenticated === true?(
                    <div id="logout" style={{marginLeft:"50%"}} onClick={this.props.logout}>
                        <Link to="#">logout</Link>
                    </div>
                ):(
                    <div style={{display: "flex",flexDirection: "row",justifyContent: "flex-end",width: "70%"}}>
                        <div id="signin">
                            <Link to="/signin" style={linkStyle}>Sign In</Link>
                        </div>
                        <div id="signup">
                            <Link to="/signup" style={linkStyle}>Sign Up</Link>
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return{
        isAuthenticated : state.user.isAuthenticated,
    }
}

export default connect(mapStateToProps,{logout})(Navbar);