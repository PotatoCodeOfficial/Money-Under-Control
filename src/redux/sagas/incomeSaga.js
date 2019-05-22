import { takeEvery, put, call } from "redux-saga/effects";
import { getNonDeletedIncomes } from "../../api/incomeApi";
import * as IncomeActionTypes from "../actiontypes/incomes";

function* loadUserIncomes() {
  const incomes = yield call(getNonDeletedIncomes);
  yield put({
    type: IncomeActionTypes.SET_INCOMES,
    payload: incomes
  });
}

export function* watchLoadIncomes() {
  // Each time someone calls LOAD_USER, will perfom getUserFromFirebase
  yield takeEvery(IncomeActionTypes.LOAD_INCOMES, loadUserIncomes);
}
