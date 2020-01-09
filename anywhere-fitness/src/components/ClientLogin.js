// lydie this is where you build the login form -- implement material ui

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardTitle, CardImg } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import useUser from "../context/useUser";


export default function ClientLogin(props) {

  const { user, clientLogin } = useUser();
  const { data } = user;
  console.log({ data });
  const [message, setMessage] = useState('')
  const styling = useStyles();

  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: ""
  });

  function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);
    return [
      fields,
      function (event) {
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

  function handleSubmit(values, tools) {
    axios.post('http://localhost:3000/login', values)
      .then(response => {
        setMessage(response.data.message);
        tools.resetForm();
      })
      .catch()
  };


  // implementing axios get request
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState("");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/1`)
      .then(response => {
        const RandomDogs = response.data.message;
        setDogs(RandomDogs);
      })
      .catch(error => {

      });
  }, [breed]);

  return (
    <div>
      <Button color="primary" onClick={() => setBreed("chihuahua")}>
        Chihuahua
      </Button>
      <button onClick={() => setBreed("african")}>African</button>
      <button onClick={() => setBreed("chow")}>Chow</button>
      <button onClick={() => setBreed("beagle")}>Beagle</button>
      <button onClick={() => setBreed("boxer")}>Boxer</button>
      <button onClick={() => setBreed("husky")}>Husky</button>
      <button onClick={() => setBreed("dhole")}>Dhole</button>
      <button onClick={() => setBreed("cairn")}>Cairn</button>
      <button onClick={() => setBreed("shiba")}>Shiba</button>
      <button onClick={() => setBreed("mix")}>Mix</button>

      <div className="entry">
        {dogs.map(entry => {
          return <DogCard key={entry} breed={breed} imgUrl={entry} />;
        })}
      </div>


      <Container className={styling.root}>
        <div>
          <Typography variant="h4" component="h1" align="center">
            Member Login
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
              autoComplete="username"
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
              autoComplete="current-password"
              onChange={handleFieldChange}
              value={fields.password}
            ></TextField>
            <label />
            <TextField
              id="email"
              label="Email Address"
              name="email"
              fullWidth
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

        <h5>Love dogs? click on a breed name to see a new dog picture each time!</h5>

      </Container>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },

  form: {
    width: "100%",
  },

  button: {
    margin: theme.spacing(3, 0, 3)
  }
}));


// add event listenner
const formColorChange = document.querySelector('div')
formColorChange.addEventListener('mouseenter', event => {
  event.target.style.color = 'purple';
});

const DogCard = props => {
  return (
    <div>
      <Card>
        <CardImg top width="20%" src={props.imgUrl} alt="random dog image" />
        <CardTitle color="primary" style={{ color: "#555" }}>
        </CardTitle>
      </Card>
    </div>
  );
};