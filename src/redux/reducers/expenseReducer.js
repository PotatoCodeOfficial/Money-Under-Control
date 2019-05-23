import * as ExpenseTypes from "../actiontypes/expenses";

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

export default function expenseReducer(state = initialState.expenses, action) {
  switch (action.type) {
    case ExpenseTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    default:
      return state;
  }
}
