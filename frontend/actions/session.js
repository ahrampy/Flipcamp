import * as APIUtil from "../utils/session_api";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const signin = user => dispatch =>
  APIUtil.signin(user).then(
    data => dispatch(receiveCurrentUser(data)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const signout = () => dispatch =>
  APIUtil.signout().then(() => dispatch(signoutCurrentUser()));
