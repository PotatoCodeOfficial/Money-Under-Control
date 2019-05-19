import * as AuthActionTypes from "../actiontypes/auth";

const initialState = {
  user: null
};

// Important: This should be a `Pure Function` so
// please do not modify current state inside this
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AuthActionTypes.LOG_IN_USER:
      return {
        ...state,
        user: action.payload
      };

    case AuthActionTypes.LOG_OUT_USER:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}
