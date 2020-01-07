import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, dummyData , ...rest }) => {

  console.log("rest",rest)

  return (
    <Route
      {...rest}
      
      render={props => {
        if (2>1) {
          return <Component {...rest} {...dummyData}/>;
        } else {
          return <Redirect to="/instructor-login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
