import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(style => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "500px"
  },
  button: {
    margin: style.spacing(3, 0, 3),
    textDecoration: "none"
  }
}));

const RegisterForm = () => {
  const styling = useStyles();

  return (
    <Container>
      <form className={styling.form}>
        <Typography>Register</Typography>
        <label />
        <TextField name="name" type="text" placeholder="Name" />
        <label />
        <TextField name="name" type="email" placeholder="Email" />
        <label />
        <TextField name="name" type="password" placeholder="Password" />
        <Button className={styling.button}>
          <Link to="/member-login">SIGN UP</Link>
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
