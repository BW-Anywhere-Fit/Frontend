import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InstructorLogin from "./components/InstructorLogin";

// axios get, put, post
// routing

function App() {
  return (
    <div className="App">
      <h1> anywhere fitness</h1>
      <InstructorLogin />
    </div>
  );
}

export default App;
