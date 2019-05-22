import * as CategoryTypes from "../actiontypes/categoryActionTypes";

const initialState = {
  incomeCategories: [],
  expenseCategories: []
};

// Important: This should be a `Pure Function` so
// please do not modify current state inside this
export default function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CategoryTypes.SET_CATEGORIES:
      let incomeCategories = action.payload.filter(category => {
        return category.category_type === "income";
      });
      let expenseCategories = action.payload.filter(category => {
        return category.category_type === "expense";
      });
      return {
        ...state,
        incomeCategories,
        expenseCategories
      };

    default:
      return state;
  }
}
