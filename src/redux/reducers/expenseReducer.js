import * as ExpenseTypes from "../actiontypes/expensesActionTypes";

const initialState = {
  expenses: [],
  actualExpense: {
    id: null,
    name: "",
    description: "",
    amount: 0,
    category: 1
  },
  createModalStatus: {
    isOpen: false
  }
};

// Important: This should be a `Pure Function` so
// please do not modify current state inside this (And what if I do? :P )
export default function ExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case ExpenseTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case ExpenseTypes.ADD_EXPENSE:
      let { expenses } = state;
      expenses.push(action.payload);
      return {
        ...state,
        expenses
      };

    case ExpenseTypes.GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };

    case ExpenseTypes.OPEN_CREATE_EXPENSE_MODAL:
      return {
        ...state,
        createModalStatus: { ...state.createModalStatus, open: true }
      };

    case ExpenseTypes.CLOSE_CREATE_EXPENSE_MODAL:
      return {
        ...state,
        createModalStatus: { ...state.createModalStatus, open: false }
      };

    case ExpenseTypes.UPDATE_ACTUAL_EXPENSE:
      return {
        ...state,
        actualExpense: { ...state.actualExpense, ...action.payload }
      };

    case ExpenseTypes.CLEAN_ACTUAL_EXPENSE:
      return {
        ...state,
        actualExpense: initialState.actualExpense
      };

    case ExpenseTypes.SET_ACTUAL_EXPENSE:
      return {
        ...state,
        actualExpense: action.payload
      };

    default:
      return state;
  }
}
