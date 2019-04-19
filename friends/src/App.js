import React, { Component } from "react";
import "./App.css";
import Login from "../src/components/Login";
import FriendsList from "../src/components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    );
  }
}

export default App;
