// Will export action creators
import * as IncomeTypes from "../actiontypes/incomes";

// realted to API calls
export const getIncomes = incomes => {
  return { type: IncomeTypes.GET_INCOMES, payload: incomes };
};

export const addIncome = income => {
  return { type: IncomeTypes.ADD_INCOME, payload: income };
};

// Modal Stuff
export const openModal = () => {
  return { type: IncomeTypes.OPEN_CREATE_INCOME_MODAL };
};

export const closeModal = () => {
  return { type: IncomeTypes.CLOSE_CREATE_INCOME_MODAL };
};

// Form Stuff

export const updateActualIncome = income => {
  return { type: IncomeTypes.UPDATE_ACTUAL_INCOME, payload: income };
};

export const cleanActualIncome = () => {
  return { type: IncomeTypes.CLEAN_ACTUAL_INCOME };
};

export const setActualIncome = income => {
  return { type: IncomeTypes.SET_ACTUAL_INCOME, payload: income };
};

// Saga
export const loadUserIncomes = () => {
  return { type: IncomeTypes.LOAD_INCOMES };
};

// Set data
export const setIncomes = incomes => {
  return { type: IncomeTypes.SET_INCOMES, payload: incomes };
};
