import {add,deleteE,fetch} from "../actiontypes";
const defaultState = [];

export default(state=defaultState,action)=>{
    switch(action.type){
        case fetch: 
            return [...action.data];
        case add:
            return [...state,action.data];
        case deleteE:
            let files = state.filter(file=>{
                return file._id!==action._id;
            })
            return files;
        default:
            return state;
    }
}