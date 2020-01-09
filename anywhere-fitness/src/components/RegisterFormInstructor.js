import React, { useState } from "react";
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

const RegisterFormInstructor = (props) => {
  const styling = useStyles();
  const { instructorRegister}  = useUser()
 

  const [instructorRegisterCredentials, setIntructorRegisterCredentials] = useState({
    username: "",
    password: "",
    instructor: true,
})

const handleChanges = e => {
    setIntructorRegisterCredentials({...instructorRegisterCredentials, [e.target.name]: e.target.value})
}


const handlesubmit = e => {
    e.preventDefault();
    instructorRegister(instructorRegisterCredentials)
    props.history.push('/instructor-login')
    
}
console.log(instructorRegisterCredentials)




  return (
    <Container>
      <form className={styling.form} onSubmit={handlesubmit}>
        <Typography>Register</Typography>
        <label />
        <TextField name="username" type="text" placeholder="username" onChange={handleChanges} value={instructorRegisterCredentials.username}/>
        <label />
        <TextField name="password" type="text" placeholder="password" onChange={handleChanges} value={instructorRegisterCredentials.password}/>
        <Button type="submit" className={styling.button} >SIGN UP
          
        </Button>
        <Link to="/">SIGN IN</Link>
      </form>
    </Container>
  );
};

export default RegisterFormInstructor;
