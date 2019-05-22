import { all, fork } from "redux-saga/effects";

import { watchLoadUser } from "./authSaga";
import { watchLoadIncomes } from "./incomeSaga";
import { watchLoadCategories } from "./categorySaga";

export default function*() {
  yield all([
    fork(watchLoadUser),
    fork(watchLoadIncomes),
    fork(watchLoadCategories)
  ]);
}
