// lydie this is where you build the login form
// implement material ui

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useUser from "../context/useUser";

export default function ClientLogin(props) {
  const styling = useStyles();
  const { user, clientLogin } = useUser();

  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: ""
  });

  function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);
    return [
      fields,
      function(event) {
        setValues({
          ...fields,
          [event.target.id]: event.target.value
        });
      }
    ];
  }

  function validateForm() {
    return fields.username.length > 0 && fields.password.length > 0;
  }

  const handleSubmit = e => {
    e.preventDefault();
    clientLogin(fields);
    props.history.push("/classes");
  };

  return (
    <Container className={styling.root}>
      <div>
        <Typography variant="h3" component="h1" align="center">
          Client Login
        </Typography>

        <form className={styling.form} onSubmit={handleSubmit}>
          <label />
          <TextField
            required
            id="username"
            type="text"
            name="username"
            label="username"
            fullWidth
            onChange={handleFieldChange}
            value={fields.username}
          ></TextField>

          <label />
          <TextField
            required
            id="password"
            type="password"
            name="password"
            label="Password"
            fullWidth
            onChange={handleFieldChange}
            value={fields.password}
          ></TextField>

          <Button
            className={styling.button}
            disabled={!validateForm()}
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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(7)
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },

  button: {
    margin: theme.spacing(3, 0, 3)
  }
}));
