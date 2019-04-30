import {addUser,removeUser} from "../actiontypes";
import apiCall from "../../api/apicall";
import {showError,removeErrorFromApp} from "./error";
export const addUserToapp = function(data){
    return{
        type: addUser,
        userData: data
    }
}

export const removeUserFromApp = function(){
    return{
        type: removeUser
    }
}

export const logout = function(){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            dispatch(removeUserFromApp());
            localStorage.clear();
            return resolve();
        })
    }
}

export const authenticate = function(type,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`http://localhost:3001/user/${type}`,data)
            .then(res=>{
                dispatch(addUserToapp(res));
                localStorage.setItem("jwtToken",res.token);
                dispatch(removeErrorFromApp);
                return resolve(res);
            }).catch(err=>{
                dispatch(showError(err));
                return reject();
            })
        })
    }
}