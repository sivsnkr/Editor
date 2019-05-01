import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./main";
import {Provider} from "react-redux";
import Navbar from "./navbar";
import jwtDecode from "jwt-decode";
import {configureStore} from "../store";
import { addUserToapp } from '../store/actions/user';
import { fetchAll } from '../store/actions/editor';
export const store = configureStore();
if(localStorage.length > 0){
  const user = jwtDecode(localStorage.jwtToken);
  store.dispatch(addUserToapp(user));
  fetchAll(user._id);
}

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="main">
              <Main/>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
