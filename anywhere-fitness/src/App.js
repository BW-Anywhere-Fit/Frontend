import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import InstructorLogin from "./components/InstructorLogin";
import ClientLogin from "./components/ClientLogin";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClassList";
import NavBar from "./components/NavBar";

import UserProvider from "./context/UserProvider";

// import ClassCard from "./components/ClassCard";
import ClassDetails from "./components/ClassDetails";
import RegisterForm from "./components/RegisterForm";

// axios get, put, post
// routing

function App() {


  return (
    <div className="Page">
      <UserProvider>
        <div className="App">
          <NavBar />
          <Router>
            {/* <Link to="/member-login">Member Login</Link> */}

            {/* <Link to="/instructor-login">Instructor Login</Link> */}

            <Switch>
              <PrivateRoute
                exact
                path="/classes"
                component={ClassList}
              />
              <PrivateRoute
                path="/classes/:id"
                component={ClassDetails}
              />

              <Route exact path="/" component={ClientLogin} />
              <Route path="/instructor-login" component={InstructorLogin} />
              <Route path="/register-form" component={RegisterForm} />
            </Switch>
          </Router>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
