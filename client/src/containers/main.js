import React ,{Component} from "react";
import {connect} from "react-redux";
import {Route,withRouter,Switch} from "react-router-dom";
import HomePage from "../components/homepage";
export class Main extends Component{
    render(){
        const{user} = this.props;
        const isAuthenticate = user.isAuthenticated;
        return(
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} isAuthenticated={isAuthenticate}/>}/>
                <Route exact path="/signup"/>
                <Route exact path="/signin"/>
            </Switch>
        )
    }
}
const mapStateToProps = function(state){
    return {
        user: state.user,
    }
}

export default withRouter(connect(mapStateToProps,null)(Main));