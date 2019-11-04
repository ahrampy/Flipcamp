import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  signedIn: Boolean(state.session.currentUser),
});

const Auth = ({ component: Component, path, signedIn }) => (
  <Route
    path={path}
    render={props => (
    signedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ component: Component, path, signedIn }) => (
  <Route
    path={path}
    render={props => (
    signedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
