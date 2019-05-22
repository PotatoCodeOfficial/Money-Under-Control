import { takeEvery, put, call } from "redux-saga/effects";
import { getNonDeletedCategories } from "../../api/categoryApi";
import * as CategoryTypes from "../actiontypes/categoryActionTypes";

function* loadCategories() {
  const categories = yield call(getNonDeletedCategories);
  yield put({
    type: CategoryTypes.SET_CATEGORIES,
    payload: categories
  });
}

export function* watchLoadCategories() {
  yield takeEvery(CategoryTypes.LOAD_CATEGORIES, loadCategories);
}
