import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "../store/reducer";
import thunk from "redux-thunk";

export const configureStore = function(){
    return createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
}