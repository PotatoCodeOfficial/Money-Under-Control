// Will export action creators
import * as AuthActionTypes from "../actiontypes/auth";

export const loginUser = user => {
  return { type: AuthActionTypes.LOG_IN_USER, payload: user };
};

export const logoutUser = () => {
  return { type: AuthActionTypes.LOG_OUT_USER };
};
