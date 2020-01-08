// lydie this is where you build the login form
// implement material ui

import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Typography,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Login() {
  const styling = useStyles();

  return (
    <Container className={styling.root}>
      <div>
        <Typography variant="h3" component="h1">
          Login
        </Typography>

        <form className={styling.form}>
          <TextField
            id="email"
            label="Email Address"
            name="email"
            fullWidth
          ></TextField>

          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            fullWidth
          ></TextField>

          <Button
            className={styling.button}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </Button>

          <Grid>
            <Grid item xs>
              <Link to="/register-form">Don't have an account? Sign Up </Link>
            </Grid>
            <Link to="/instructor-login">Instructor Login</Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles(style => ({
  root: {
    display: "flex"
  },

  form: {
    width: "100%"
  },

  button: {
    margin: style.spacing(3, 0, 3)
  }
}));
