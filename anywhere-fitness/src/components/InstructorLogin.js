import React from "react";

import TextField from "@material-ui/core/TextField";

const InstructorLogin = () => {
  const [instructorCredentials, setInstructorCredentials] = React.useState({
    username: "",
    password: ""
  });

  const handleOnChange = e => {
    e.preventDefault();
    setInstructorCredentials({
      ...instructorCredentials,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    // axios call
    // axiosWithAuth()
    //   .post("/instructor-login", userText)
    //   .then(res => {
    //     // console.log(res);
    //     localStorage.setItem("token", res.data.payload);
    //     props.history.push("/friends");
    //   })
    //   .catch(err => {
    //     console.log(err.response);
    //   });
  };

  return (
    <div>
      {/* this can be a card// implement material ui  */}
      <h1>Instructor Login</h1>
      <form>
        <label />
        <TextField
          validate
          type="text"
          name="username"
          placeholder="username"
          onChange={handleOnChange}
          value={instructorCredentials.username}
        />
        <label />
        <TextField
          type="password"
          name="password"
          placeholder="password"
          onChange={handleOnChange}
          value={instructorCredentials.password}
        />
      </form>
      <button>Login</button>
      <a> not an instructor? </a>
    </div>
  );
};

export default InstructorLogin;
