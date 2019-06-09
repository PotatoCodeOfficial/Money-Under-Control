// Will export action creators
import * as ExpenseTypes from "../actiontypes/expensesActionTypes";

// realted to API calls
export const getExpenses = expenses => {
  return { type: ExpenseTypes.GET_EXPENSES, payload: expenses };
};

export const addExpense = expense => {
  return { type: ExpenseTypes.ADD_EXPENSE, payload: expense };
};

// Modal Stuff
export const openModal = () => {
  return { type: ExpenseTypes.OPEN_CREATE_EXPENSE_MODAL };
};

export const closeModal = () => {
  return { type: ExpenseTypes.CLOSE_CREATE_EXPENSE_MODAL };
};

// Form Stuff

export const updateActualExpense = expense => {
  return { type: ExpenseTypes.UPDATE_ACTUAL_EXPENSE, payload: expense };
};

export const cleanActualExpense = () => {
  return { type: ExpenseTypes.CLEAN_ACTUAL_EXPENSE };
};

export const setActualExpense = expense => {
  return { type: ExpenseTypes.SET_ACTUAL_EXPENSE, payload: expense };
};

// Saga
export const loadUserExpenses = () => {
  return { type: ExpenseTypes.LOAD_EXPENSES };
};

export const saveExpense = (newExpense) => {
  return {
    type: ExpenseTypes.SAVE_EXPENSE,
    payload: newExpense
  }
}

export const deleteExpense = (id) => {
  return {
    type: ExpenseTypes.DELETE_EXPENSE,
    payload: id
  }
}


// Set data
export const setExpenses = expenses => {
  return { type: ExpenseTypes.SET_EXPENSES, payload: expenses };
};


export const setExpense = expense => {
  return { type: ExpenseTypes.SET_EXPENSE, payload: expense };
};
