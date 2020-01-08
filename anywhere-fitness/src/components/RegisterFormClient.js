import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useUser from "../context/useUser";

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

const RegisterFormClient = () => {
  const styling = useStyles();
  const { register } = useUser();

  const [clientCredentials, setClientCredentials] = React.useState({
    username: "",
    password: "",
    instructor: false
  });

  const handleChange = e => {
    e.preventDefault();
    setClientCredentials({
      ...clientCredentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    register(clientCredentials);
  };

  return (
    <Container>
      <form className={styling.form} onSubmit={handleSubmit}>
        <Typography>Register</Typography>
        <label />
        <TextField
          name="username"
          type="text"
          onChange={handleChange}
          value={clientCredentials.username}
          placeholder="Username"
        />
        <label />
        <TextField
          name="password"
          type="password"
          onChange={handleChange}
          value={clientCredentials.password}
          placeholder="Password"
        />
        <Button className={styling.button}>
          <Link to="/">SIGN UP</Link>
        </Button>
      </form>
    </Container>
  );
};

export default RegisterFormClient;