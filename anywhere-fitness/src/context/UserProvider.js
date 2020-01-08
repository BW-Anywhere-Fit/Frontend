import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const UserContext = React.createContext();

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

function reducer(state, action) {
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

  React.useEffect(() => {
    axiosWithAuth()
      .get("url")
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, data: res.data.payload });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, error: err.response });
      });
  }, []);

  const register = ({ username, password, instructor }) => {
    if (!username || !password) {
      throw new Error("username and password are required");
    }
    dispatch({ type: FETCH_INIT });
    axiosWithAuth()
      .post("/clients/register", {
        username,
        password,
        instructor
      })
      .then(res => {
        console.log("response", res);
        // dispatch({ type: FETCH_SUCCESS, data: res.data.payload });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: FETCH_ERROR, error: err.response });
      });
  };

  const login = ({ username, password }) => {
    if (!username || !password) {
      throw new Error("username and password are required");
    }

    dispatch({ type: FETCH_INIT });

    axiosWithAuth()
      .post("/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.payload.token);
        dispatch({ type: FETCH_SUCCESS, data: res.data.payload });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, error: err.response });
      });
  };

  const value = {
    user: { error, loading, data },
    register,
    login
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
