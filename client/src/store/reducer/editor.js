import {add,deleteE,fetch,edit} from "../actiontypes";
const defaultState = [];

export default(state=defaultState,action)=>{
    switch(action.type){
        case fetch: 
            return [...action.data];
        case add:
            return [...state,action.data];
        case deleteE:
            let files = state.filter(file=>{
                return file._id!==action.id;
            })
            return files;
        case edit:
            let ufiles = state.filter(file=>{
                return file._id!==action.data._id;
            })
            ufiles.push(action.data);
            return ufiles;
        default:
            return state;
    }
}