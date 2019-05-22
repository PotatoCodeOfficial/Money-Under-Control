import { getCurrentUser } from "../../helpers/firebase";
import { takeEvery, put, call } from "redux-saga/effects";
import * as AuthActionTypes from "../actiontypes/auth";

function* getAndSetUserFromFirebase() {
  const user = yield call(getCurrentUser);
  yield put({
    type: AuthActionTypes.SET_USER,
    payload: user
  });
}

export function* watchLoadUser() {
  // Each time someone calls LOAD_USER, will perfom getUserFromFirebase
  yield takeEvery(AuthActionTypes.LOAD_USER, getAndSetUserFromFirebase);
}
