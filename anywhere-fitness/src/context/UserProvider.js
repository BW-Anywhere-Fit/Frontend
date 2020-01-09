import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const UserContext = React.createContext();

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

function reducer(state, action) {
  // console.log("state", { state });
  switch (action.type) {
    case FETCH_INIT: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  error: null,
  loading: true, // initialize as true to prevent content flash before initial credential check
  data: null
};



const UserProvider = ({ children }) => {
  const [{ error, loading, data }, dispatch] = React.useReducer(
    reducer,
    initialState
  );


 
      

    


  const clientRegister = ({ username, password, instructor }) => {
    if (!username || !password) {
      throw new Error("username and password are required");
    }
    dispatch({ type: FETCH_INIT });
    axios
      .post("https://bw-anywhere-fitness1.herokuapp.com/clients/register", {
        username,
        password,
        instructor
      })
      .then(res => {
        console.log("response", res);
        // dispatch({ type: FETCH_SUCCESS, data: res.data });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: FETCH_ERROR, error: err.response });
      });
  };

  const instructorRegister = ({ username, password, instructor }) => {
    if (!username || !password) {
      throw new Error("username and password are required");
    }
    dispatch({ type: FETCH_INIT });
    axios
      .post("https://bw-anywhere-fitness1.herokuapp.com/auth/register", {
        username,
        password,
        instructor
      })
      .then(res => {
        console.log("response", res);
        // dispatch({ type: FETCH_SUCCESS, data: res.data });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: FETCH_ERROR, error: err.response });
      });
  };
  const clientLogin = ({ username, password }) => {
    if (!username || !password) {
      throw new Error("username and password are required");
    }

    dispatch({ type: FETCH_INIT });

    axiosWithAuth()
      .post("/clients/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: FETCH_SUCCESS, data: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, error: err.response });
      });
  };

  const instructorLogin = ({ username, password }) => {
    if (!username || !password) {
      throw new Error("username and password are required");
    }

    dispatch({ type: FETCH_INIT });

    

    axiosWithAuth()
      .post("/auth/login", { username, password })
      .then(res => {
        console.log("res instructor",res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("instructor", res.data.instructor);
        localStorage.setItem("instructorID",res.data.id)
        dispatch({ type: FETCH_SUCCESS, data: res.data.payload });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, error: err.response });
      });
  };

  const value = {
    user: { error, loading, data },
    clientRegister,
    clientLogin,
    instructorRegister,
    instructorLogin,
    
  };

  // console.log({ value });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

// const logout = () => {
//   dispatch({ type: FETCH_INIT });
//   axios
//     .post("/logout")
//     .then(res => {
//       localStorage.removeItem("token");
//       dispatch({ type: FETCH_SUCCESS, data: null });
//     })
//     .catch(err => {
//       dispatch({ type: FETCH_ERROR, error: err.response });
//     });
// };
