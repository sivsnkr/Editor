import {add,deleteE} from "../actiontypes";
const defaultState = [];

export default(state=defaultState,action)=>{
    switch(action.type){
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