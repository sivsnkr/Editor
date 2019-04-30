import React ,{Component} from "react";
import {connect} from "react-redux";
import {Route,withRouter,Switch} from "react-router-dom";
import HomePage from "../components/homepage";
import Authorization from "../components/authorization";
import {authenticate} from "../store/actions/user";
export class Main extends Component{
    render(){
        const{user,authenticate} = this.props;
        const isAuthenticate = user.isAuthenticated;
        
        return(
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} isAuthenticated={isAuthenticate}/>}/>
                <Route exact path="/signup" render={(props)=><Authorization {...props} type="SignUp" authenticate={authenticate}/>}/>
                <Route exact path="/signin" render={(props)=><Authorization {...props} type="SignIn" authenticate={authenticate}/>}/>
            </Switch>
        )
    }
}
const mapStateToProps = function(state){
    return {
        user: state.user,
    }
}

export default withRouter(connect(mapStateToProps,{authenticate})(Main));