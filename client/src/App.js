import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./containers/main";
import {Provider} from "react-redux";
import Navbar from "./containers/navbar";
import jwtDecode from "jwt-decode";
import {configureStore} from "../store";

const store = configureStore();
if(localStorage.length > 0){
  const user = jwtDecode(localStorage.jwtToken);
  store.dispatch(addUser(user));
  setTokenHeader(user.token);
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
