import * as types from "../actiontypes/expenses";
import * as expenseApi from "../../api/expenseApi";

export function loadExpensesSuccess(expenses) {
  return { types: types.LOAD_EXPENSES_SUCCESS, expenses };
}

export function loadExpenses() {
  return function(dispatch) {
    return (
      expenseApi
        .getExpenses()
        .then(expenses => {
          dispatch(loadExpensesSuccess(expenses));
        })
        // TODO: change a better way to log the api errors
        .catch(error => {
          throw error;
        })
    );
  };
}
