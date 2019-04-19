import React, { Component } from "react";
import "./App.css";
import Login from "../src/components/Login";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Login} />
      </div>
    );
  }
}

export default App;
