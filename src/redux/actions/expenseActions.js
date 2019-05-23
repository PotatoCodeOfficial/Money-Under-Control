// Will export action creators
import * as ExpenseTypes from "../actiontypes/expenses";

// Saga
export const loadUserExpenses = () => {
  return { type: ExpenseTypes.LOAD_EXPENSES };
};

// Set data
export const setExpenses = expenses => {
  return { type: ExpenseTypes.SET_EXPENSES, payload: expenses };
};
