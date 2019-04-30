import React ,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
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
        return(
            <div style={style}>
                <a style = {{color: "blue"}} Link to="#">Code Box</a>
                {isAuthenticated === true?(
                    <div id="logout">
                        <Link to="/logout">logout</Link>
                    </div>
                ):(
                    <div style={{display: "flex",flexDirection: "row",justifyContent: "flex-end",width: "90%"}}>
                        <div id="signin">
                            <Link to="/signin">Sign In</Link>
                        </div>
                        <div id="signup" style={{marginLeft: "30px"}}>
                            <Link to="/signup">Sign Up</Link>
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

export default connect(mapStateToProps,null)(Navbar);