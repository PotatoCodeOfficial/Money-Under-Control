import { combineReducers } from "redux";
import expenses from "./expenseReducer";
import incomes from "./incomeReducer";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  expenses,
  incomes
});

export default rootReducer;
