import { combineReducers } from "redux";
import expenses from "./expenseReducer";
import incomes from "./incomeReducer";
import auth from "./authReducer";
import category from "./categoryReducer";

const rootReducer = combineReducers({
  auth,
  expenses,
  incomes,
  category
});

export default rootReducer;
