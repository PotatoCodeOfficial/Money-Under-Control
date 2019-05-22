import * as CategoryTyoes from "../actiontypes/categoryActionTypes";

// Saga
export const loadCategories = () => {
  return { type: CategoryTyoes.LOAD_CATEGORIES };
};

// Set data
export const setCategories = categories => {
  return { type: CategoryTyoes.SET_CATEGORIES, payload: categories };
};
