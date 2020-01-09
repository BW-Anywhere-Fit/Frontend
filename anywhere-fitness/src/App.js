import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InstructorLogin from "./components/InstructorLogin";
import ClientLogin from "./components/ClientLogin";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClassList";
import NavBar from "./components/NavBar";
import RegisterFormInstructor from "./components/RegisterFormInstructor";

import UserProvider from "./context/UserProvider";

// import ClassCard from "./components/ClassCard";
import ClassDetails from "./components/ClassDetails";
import { axiosWithAuth } from "./utils/axiosWithAuth";

import RegisterFormClient from "./components/RegisterFormClient";
import UpdateForm from "./components/UpdateForm";

// axios get, put, post
// routing

function App() {
  const [classData, setClassData] = useState([]);
  const [depend, setDepend] = useState(false);
  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then(res => {
        console.log("res", res);
        setClassData(res.data);
      })
      .catch(err => {});
  }, []);

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
                setClassData={setClassData}
                setDepend={setDepend}
                depend={depend}
                classData={classData}
                component={ClassList}
              />
              <PrivateRoute
                path="/classes/:id"
                setDepend={setDepend}
                depend={depend}
                classData={classData}
                component={ClassDetails}
              />

              <Route exact path="/" component={ClientLogin} />
              <Route path="/instructor-login" component={InstructorLogin} />
              <Route path="/register-form" component={RegisterFormClient} />
              <Route
                path="/update-form/:id"
                render={props => (
                  <UpdateForm
                    {...props}
                    setDepend={setDepend}
                    depend={depend}
                    classData={classData}
                  />
                )}
              />
              <Route
                path="/register-form-instructor"
                component={RegisterFormInstructor}
              />
            </Switch>
          </Router>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
