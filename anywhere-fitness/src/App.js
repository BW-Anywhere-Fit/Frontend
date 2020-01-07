import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import InstructorLogin from "./components/InstructorLogin";
// import ClientLogin from "./components/ClientLogin";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClassList";
import Data from "./Data/Data";
import UserProvider from "./context/UserProvider";

// axios get, put, post
// routing

function App() {
  const [dummyData] = React.useState([Data]);

  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
