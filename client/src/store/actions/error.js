import {addError,removeError} from "../actiontypes";

export const showError = function(error){
    return{
        type: addError,
        message: error
    }
}

export const removeErrorFromApp = function(){
    return{
        type: removeError
    }
}