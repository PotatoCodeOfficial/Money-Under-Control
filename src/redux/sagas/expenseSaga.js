import { takeEvery, put, call } from "redux-saga/effects";
import { getNonDeletedExpenses, saveExpense, deleteExpense } from "../../api/expenseApi";
import * as ExpenseActionTypes from "../actiontypes/expensesActionTypes";

function* loadUserExpenses() {
  const expenses = yield call(getNonDeletedExpenses);
  yield put({
    type: ExpenseActionTypes.SET_EXPENSES,
    payload: expenses
  });
}

function* closeAndCleanModal() {
  yield put({
    type: ExpenseActionTypes.CLOSE_CREATE_EXPENSE_MODAL
  })
  yield put({
    type: ExpenseActionTypes.CLEAN_ACTUAL_EXPENSE
  })
  yield put({
    type: ExpenseActionTypes.CLOSE_CREATE_EXPENSE_MODAL
  })
}

function* saveExpenseOnApi(newExpense) {
  yield call(saveExpense, newExpense.payload)
  yield put({
    type: ExpenseActionTypes.LOAD_EXPENSES
  })
  yield call(closeAndCleanModal)
}

function* deleteExpenseOnApi(expense) {
  yield call(deleteExpense, expense.payload)
  yield put({
    type: ExpenseActionTypes.LOAD_EXPENSES
  })
  yield call(closeAndCleanModal)
}

export function* watchLoadExpenses() {
  yield takeEvery(ExpenseActionTypes.LOAD_EXPENSES, loadUserExpenses);
}
export function* watchSaveExpense() {
  yield takeEvery(ExpenseActionTypes.SAVE_EXPENSE, saveExpenseOnApi);
}

export function* watchDeleteExpense() {
  yield takeEvery(ExpenseActionTypes.DELETE_EXPENSE, deleteExpenseOnApi)
}