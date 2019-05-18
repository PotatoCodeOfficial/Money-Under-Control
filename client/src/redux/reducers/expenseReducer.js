import * as types from "../actiontypes/expenses";
import initialState from "./initialState";

export default function expenseReducer(state = initialState.expenses, action) {
  switch (action.type) {
    case types.LOAD_EXPENSES_SUCCESS:
      return action.expenses;
    default:
      return state;
  }
}
