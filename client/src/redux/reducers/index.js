import { combineReducers } from "redux";
import expenses from "./expenseReducer";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  expenses
});

export default rootReducer;
