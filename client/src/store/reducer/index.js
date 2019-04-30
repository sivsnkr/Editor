import {combineReducers} from "redux";
import user from "./currentUser";
import error from "./error";
import editor from "./editor";

export default combineReducers({
    user,
    editor,
    error,
});