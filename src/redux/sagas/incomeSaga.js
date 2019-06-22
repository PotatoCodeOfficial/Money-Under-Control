import { takeEvery, put, call } from "redux-saga/effects";
import { getNonDeletedIncomes, saveIncome, deleteIncome } from "../../api/incomeApi";
import * as IncomeActionTypes from "../actiontypes/incomesActionTypes";

function* loadUserIncomes() {
  const incomes = yield call(getNonDeletedIncomes);
  yield put({
    type: IncomeActionTypes.SET_INCOMES,
    payload: incomes
  });
}

function* closeAndCleanModal() {
  yield put({
    type: IncomeActionTypes.CLOSE_CREATE_INCOME_MODAL
  })
  yield put({
    type: IncomeActionTypes.CLEAN_ACTUAL_INCOME
  })
  yield put({
    type: IncomeActionTypes.CLOSE_CREATE_INCOME_MODAL
  })
}

function* saveIncomeOnApi(newIncome) {
  yield call(saveIncome, newIncome.payload)
  yield put({
    type: IncomeActionTypes.LOAD_INCOMES
  })
  yield call(closeAndCleanModal)
}

function* deleteIncomeOnApi(income) {
  yield call(deleteIncome, income.payload)
  yield put({
    type: IncomeActionTypes.LOAD_INCOMES
  })
  yield call(closeAndCleanModal)
}

export function* watchLoadIncomes() {
  yield takeEvery(IncomeActionTypes.LOAD_INCOMES, loadUserIncomes);
}
export function* watchSaveIncome() {
  yield takeEvery(IncomeActionTypes.SAVE_INCOME, saveIncomeOnApi);
}

export function* watchDeleteIncome() {
  yield takeEvery(IncomeActionTypes.DELETE_INCOME, deleteIncomeOnApi)
}