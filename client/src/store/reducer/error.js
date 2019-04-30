import {addError, removeError} from "../actiontypes";

const defaultState = {
    message: null
}

export default (state=defaultState,action)=>{
    switch(action.types){
        case addError:
            return {message: action.message};
        case removeError:
            return {message: null}
        default:
            return state;
    }
}