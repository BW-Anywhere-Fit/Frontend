import React from "react";
import { Redirect, Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import useUser from "../context/useUser";

const useStyles = makeStyles(style => ({
  login: {
    display: "flex",
    flexDirection: "column",
    width: "450px"
  },
  button: {
    margin: style.spacing(3, 0, 3)
  }
}));

const InstructorLogin = () => {
  const { user, login } = useUser();
  const styling = useStyles();

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
    <Container>
      {/* this can be a card// implement material ui  */}
      <h1>Instructor Login</h1>
      <form onSubmit={handleOnSubmit} className={styling.login}>
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
          required
          label="password"
          type="password"
          name="password"
          onChange={handleOnChange}
          value={instructorCredentials.password}
        />
        <Grid>
          <div>
            <Button
              className={styling.button}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </div>
          <Link to="/member-login">Not an Instructor?</Link>
        </Grid>
      </form>
    </Container>
  );
};

export default InstructorLogin;
