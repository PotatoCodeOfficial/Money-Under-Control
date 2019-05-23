import { takeEvery, put, call } from "redux-saga/effects";
import { getNonDeletedExpenses } from "../../api/expenseApi";
import * as ExpensesActionTypes from "../actiontypes/expenses";

function* loadUserExpense() {
  const expenses = yield call(getNonDeletedExpenses);
  yield put({
    type: ExpensesActionTypes.SET_EXPENSES,
    payload: expenses
  });
}

export function* watchLoadExpenses() {
  // Each time someone calls LOAD_USER, will perfom getUserFromFirebase
  yield takeEvery(ExpensesActionTypes.LOAD_EXPENSES, loadUserExpense);
}
