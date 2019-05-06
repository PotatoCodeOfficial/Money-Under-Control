// Will export action creators
import * as AuthActionTypes from "../actiontypes/auth";

// Each of these are actions
// Actions are a JS object with a type and metadata to know how to manage state
export const signIn = user => {
  return {
    type: AuthActionTypes.SIGN_IN_USER,
    user
  };
};

export const logOut = () => {
  return {
    type: AuthActionTypes.LOG_OUT_USER
  };
};
