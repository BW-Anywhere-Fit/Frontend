import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import InstructorLogin from "./components/InstructorLogin";
// import ClientLogin from "./components/ClientLogin";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClassList";

// axios get, put, post
// routing

function App() {
  return (
    <div className="App">
      <h1> anywhere fitness</h1>
      <Router>
        <Link to="/client-login">Member Login</Link>

        <Link to="/instructor-login">Instructor Login</Link>

        <Switch>
          <PrivateRoute path="/classes" component={ClassList} />
          <Route path="/instructor-login" component={InstructorLogin} />
          {/* <Route path="/client-login" component={ClientLogin} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
