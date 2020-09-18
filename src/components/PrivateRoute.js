import React, { Component, useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { withFirebase } from '../firebase';

const PrivateRoute = ({ component, firebase, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function getAuth() {
      const authState = await firebase.isAuthenticated();
      setIsAuthenticated(authState);
    }
    getAuth();
  }, []);

  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default withFirebase(PrivateRoute);
