import {addUser,removeUser} from "../actiontypes";
const defaultState = {
    isAuthenticated: false,
    userData: {}
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case addUser:
            return{
                isAuthenticated: !!Object.keys(action.userData),
                userData: action.userData
            };
        case removeUser:
            return defaultState;
        default:
            return state;
    }
}