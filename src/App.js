import React, { useState, useEffect } from 'react';
import './tailwind.output.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Loading from './pages/Loading';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { withFirebase } from './firebase';

const App = ({ firebase }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subsriber = firebase.authSubscriber(onAuthStateChanged);
    return subsriber;
  }, []);

  if (initializing) {
    return <Loading />;
  }

  console.log(user);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default withFirebase(App);
