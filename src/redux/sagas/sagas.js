import { all, fork } from "redux-saga/effects";

import { watchLoadUser } from "./authSaga";
import { watchLoadIncomes, watchSaveIncome, watchDeleteIncome } from "./incomeSaga";
import { watchLoadExpenses, watchSaveExpense, watchDeleteExpense } from "./expenseSaga";
import { watchLoadCategories } from "./categorySaga";

export default function* () {
  yield all([
    fork(watchLoadUser),
    fork(watchLoadIncomes),
    fork(watchSaveIncome),
    fork(watchDeleteIncome),
    fork(watchLoadExpenses),
    fork(watchSaveExpense),
    fork(watchDeleteExpense),
    fork(watchLoadCategories)
  ]);
}
