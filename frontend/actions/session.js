import * as APIUtil from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const signin = user => dispatch => (
  APIUtil.signin(user)
  .then(user => dispatch(receiveCurrentUser(user)))
);

export const signout = () => dispatch => (
  APIUtil.signout()
  .then(() => dispatch(signoutCurrentUser()))
);