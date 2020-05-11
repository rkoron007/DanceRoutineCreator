import * as API from "../util/sessionApiUtil";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const signUp = (userData) => (dispatch) =>
  API.signUp(userData).then(
    (user) => {
      console.log(user);
      dispatch(receiveUser(user));
    },
    (error) => dispatch(receiveErrors(error))
  );

export const signIn = (user) => (dispatch) => {
  return API.signIn(user).then(
    (user) => dispatch(receiveUser(user)),
    (error) => dispatch(receiveErrors(error))
  );
};

export const signOut = () => (dispatch) =>
  API.signOut().then(
    () => dispatch(logoutCurrentUser()),
    (error) => dispatch(receiveErrors(error))
  );
