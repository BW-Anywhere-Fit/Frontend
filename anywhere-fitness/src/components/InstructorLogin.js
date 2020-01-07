import React from "react";
import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useUser from "../context/useUser";

const InstructorLogin = () => {
  const { user, login } = useUser();

  const [instructorCredentials, setInstructorCredentials] = React.useState({
    username: "",
    password: ""
  });

  if (user.data) {
    return <Redirect to="/classes" />;
  }

  const handleOnChange = e => {
    e.preventDefault();
    setInstructorCredentials({
      ...instructorCredentials,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    login(instructorCredentials);
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default InstructorLogin;
