import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import InstructorLogin from "./components/InstructorLogin";
// import ClientLogin from "./components/ClientLogin";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClassList";
import Data from './Data/Data'
import ClassCard from "./components/ClassCard";
 import ClassDetails from "./components/ClassDetails"

// axios get, put, post
// routing

function App() {

const [dummyData] = useState({Data});
console.log(dummyData)


  return (
    <div className="App">
      <h1> anywhere fitness</h1>
      <Router>
        <Link to="/client-login">Member Login</Link>

        <Link to="/instructor-login">Instructor Login</Link>

        <Switch>
          <PrivateRoute exact path="/classes" dummyData={dummyData} component={ClassList} />
          <PrivateRoute  path="/classes/:id"  dummyData={dummyData} component={ClassDetails} />
          
          <Route path="/instructor-login" component={InstructorLogin} />
          {/* <Route path="/client-login" component={ClientLogin} /> */}
        </Switch>
      </Router>
    </div>
  );
  }

export default App;
