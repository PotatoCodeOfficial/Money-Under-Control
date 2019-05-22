// Will export action creators
import * as AuthActionTypes from "../actiontypes/auth";

// Maybe deprecated cause saga
export const loginUser = user => {
  return { type: AuthActionTypes.LOG_IN_USER, payload: user };
};

// Maybe deprecated cause saga
export const logoutUser = () => {
  return { type: AuthActionTypes.LOG_OUT_USER };
};

// Set user to state
export const setUser = user => {
  return { type: AuthActionTypes.SET_USER, payload: user };
};

// Have a side effect with saga to get user
export const loadUser = () => {
  return { type: AuthActionTypes.LOAD_USER };
};
