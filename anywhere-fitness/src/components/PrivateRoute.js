import React from "react";
import { Route, Redirect } from "react-router-dom";

import useUser from "../context/useUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useUser();
  const { error, loading, data } = user;
  if (loading) return null;
  if (error) {
    // handle error
    return null;
  }
  if (!data) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
