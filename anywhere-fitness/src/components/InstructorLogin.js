import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    e.preventDefault();
    // axios call
    // axiosWithAuth()
    //   .post("/instructor-login", instructorCredentials)
    //   .then(res => {
    //     // console.log(res);
    //     localStorage.setItem("token", res.data.payload);
    //     props.history.push("/classes");
    //   })
    //   .catch(err => {
    //     console.log(err.response);
    //   });
  };

  return (
    <div>
      {/* this can be a card// implement material ui  */}
      <h1>Instructor Login</h1>
      <form onSubmit={handleOnSubmit}>
        <label />
        <TextField
          required
          label="username"
          type="text"
          name="username"
          onChange={handleOnChange}
          value={instructorCredentials.username}
        />
        <label />
        <TextField
          label="password"
          type="password"
          name="password"
          onChange={handleOnChange}
          value={instructorCredentials.password}
        />
      </form>
      <Button>Login</Button>
    </div>
  );
};

export default InstructorLogin;
