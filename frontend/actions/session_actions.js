import * as SessionApiUtils from '../util/session_api_utils';

// session action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// synchronous session action creators
export const receiveCurrentUser = (currentUser) => {
  return ({
      type: RECEIVE_CURRENT_USER,
      currentUser
    });
};

export const logoutCurrentUser = () => {
  return ({
      type: LOGOUT_CURRENT_USER
    });
};

export const receiveSessionErrors = (errors) => {
  return ({
      type: RECEIVE_SESSION_ERRORS,
      errors
    });
};

// thunk session action creators
export const signup = (user) => (dispatch) => {
  return SessionApiUtils.signup(user).then(
    (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      return dispatch(receiveSessionErrors(errors.responseJSON));
    }
  );
};

export const login = (user) => (dispatch) => {
  return SessionApiUtils.login(user).then(
    (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      return dispatch(receiveSessionErrors(errors.responseJSON));
    }
  );
};

export const logout = () => (dispatch) => {
  return SessionApiUtils.logout().then(
    (user) => {
      return dispatch(logoutCurrentUser());
    }
  );
};
