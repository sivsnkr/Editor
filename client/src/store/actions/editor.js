import {edit,deleteE,save,add,fetch} from "../actiontypes";
import apiCall from "../../api/apicall";
import {showError,removeErrorFromApp} from "./error";
import {store} from "../../containers/App";
export const fetchAllfiles = function(data){
    return{
        type: fetch,
        data
    }
}

export const fetchAll = function(userid){
    console.log(userid);
    return apiCall("get",`http://localhost:3001/file/allfile/${userid}`)
    .then(res=>{
        store.dispatch(fetchAllfiles(res.files));
    })
}