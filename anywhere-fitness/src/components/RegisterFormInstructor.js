import React, { useState } from "react";
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

  const [instructorCredentials, setIntructorCredentials] = useState({
    username: "",
    password: "",
    instructor: true,
})

const handleChanges = e => {
    setIntructorCredentials({...instructorCredentials, [e.target.name]: e.target.value})
}

  return (
    <Container>
      <form className={styling.form}>
        <Typography>Register</Typography>
        <label />
        <TextField name="username" type="text" placeholder="username" onChange={handleChanges}/>
        <label />
        <TextField name="name" type="password" placeholder="password" onChange={handleChanges}/>
        <Button className={styling.button}>
          <Link to="/">SIGN UP</Link>
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
