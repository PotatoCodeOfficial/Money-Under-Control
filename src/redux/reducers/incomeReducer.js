import * as IncomeTypes from "../actiontypes/incomes";

const initialState = {
  incomes: [],
  actualIncome: {
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
// please do not modify current state inside this
export default function IncomeReducer(state = initialState, action) {
  switch (action.type) {
    case IncomeTypes.ADD_INCOME:
      let { incomes } = state;
      incomes.push(action.payload);
      return {
        ...state,
        incomes
      };

    case IncomeTypes.GET_INCOMES:
      return {
        ...state,
        incomes: action.payload
      };

    case IncomeTypes.OPEN_CREATE_INCOME_MODAL:
      return {
        ...state,
        createModalStatus: { ...state.createModalStatus, open: true }
      };

    case IncomeTypes.CLOSE_CREATE_INCOME_MODAL:
      return {
        ...state,
        createModalStatus: { ...state.createModalStatus, open: false }
      };

    case IncomeTypes.UPDATE_ACTUAL_INCOME:
      return {
        ...state,
        actualIncome: { ...state.actualIncome, ...action.payload }
      };

    case IncomeTypes.CLEAN_ACTUAL_INCOME:
      return {
        ...state,
        actualIncome: initialState.actualIncome
      };

    case IncomeTypes.SET_ACTUAL_INCOME:
      return {
        ...state,
        actualIncome: action.payload
      };

    default:
      return state;
  }
}
