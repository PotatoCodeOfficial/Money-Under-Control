import { takeEvery, put, call } from "redux-saga/effects";
import { getNonDeletedIncomes, saveIncome, deleteIncome } from "../../api/incomeApi";
import * as IncomeActionTypes from "../actiontypes/incomes";

function* loadUserIncomes() {
  const incomes = yield call(getNonDeletedIncomes);
  yield put({
    type: IncomeActionTypes.SET_INCOMES,
    payload: incomes
  });
}

function* saveIncomeOnApi(newIncome) {
  console.log("AAAA")
  yield call(saveIncome, newIncome.payload)
  console.log("BBBB")
  yield put({
    type: IncomeActionTypes.LOAD_INCOMES
  })
  console.log("CCCC")
  yield put({
    type: IncomeActionTypes.CLOSE_CREATE_INCOME_MODAL
  })
  console.log("DDDD")
  yield put({
    type: IncomeActionTypes.CLEAN_ACTUAL_INCOME
  })
  console.log("EEEE")
  yield put({
    type: IncomeActionTypes.CLOSE_CREATE_INCOME_MODAL
  })
}

function* deleteIncomeOnApi(id) {
  yield call(deleteIncome, id)
  yield put({
    type: IncomeActionTypes.CLEAN_ACTUAL_INCOME
  })
  yield put({
    type: IncomeActionTypes.CLOSE_CREATE_INCOME_MODAL
  })
}

export function* watchLoadIncomes() {
  // Each time someone calls LOAD_USER, will perfom getUserFromFirebase
  yield takeEvery(IncomeActionTypes.LOAD_INCOMES, loadUserIncomes);
}
export function* watchSaveIncome() {
  yield takeEvery(IncomeActionTypes.SAVE_INCOME, saveIncomeOnApi);
}

