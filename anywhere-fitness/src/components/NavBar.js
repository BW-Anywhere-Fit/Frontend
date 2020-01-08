import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  typography: {
    marginRight: "45%"
  },

  buttonContainer: {
    display: "flex"
  },

  mainNav: {
    backgroundColor: "dodgerblue",
    fontFamily: "Arimo"
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.mainNav}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6" className={classes.typography}>
          Fit Be Anywhere
        </Typography>
        <div className={classes.buttonContainer}>
          {/* <Button color="inherit"></Button>
          <Button color="inherit">Profile</Button> */}
          <Button color="inherit">Login</Button>
          <Button color="inherit">Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
