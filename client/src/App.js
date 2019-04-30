import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./containers/main";
import Navbar from "./containers/navbar";
class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <div className="main">
            <Main/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
