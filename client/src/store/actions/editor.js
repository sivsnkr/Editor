import {edit,deleteE,add,fetch,} from "../actiontypes";
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
    return apiCall("get",`http://localhost:3001/file/allfile/${userid}`)
    .then(res=>{
        store.dispatch(fetchAllfiles(res.files));
    })
}

export const deleteFileFromRedux = function(id){
    return{
        type: deleteE,
        id
    }
}
export const deleteFile = function(id){
    console.log(id);
    store.dispatch(deleteFileFromRedux(id));
    return apiCall("get",`http://localhost:3001/file/delete/${id}`)
    .then(res=>{
        console.log(res);
    })
}

export const addFile = (data)=>{
    return {
        type: add,
        data
    }
}

export const createFile = function(data){
    const id = store.getState().user.userData._id;
    const body={
        ...data,
        creator: id,
    }
    return apiCall("post",`http://localhost:3001/file/create`,body)
    .then(res=>{
        store.dispatch(addFile(res));
        store.dispatch(removeErrorFromApp());
    }).catch(err=>{
        store.dispatch(showError(err));
    })
}

export const updateTheFile = (data)=>{
    return {
        type: edit,
        data
    }
}
export const updateFile = function(id,body){
    return apiCall("post",`http://localhost:3001/file/edit/${id}`,body)
    .then(res=>{
        //update the file
        store.dispatch(updateTheFile(res));
    })
}
