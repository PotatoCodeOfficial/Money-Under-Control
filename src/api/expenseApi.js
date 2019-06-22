import { handleError, handleResponse, handleSaveExpenseResponse, handleDeleteExpenseResponse } from "./apiUtils";
import axios from "axios";

const baseUrl = "/expenses/";

export function getNonDeletedExpenses() {
  const url = baseUrl;
  return axios
    .get(url)
    .then(handleResponse)
    .catch(handleError);
}

export function saveExpense(expense) {
  const url = baseUrl;
  if (expense.id != null) {
    return axios
      .put(`${url}/${expense.id}`, expense)
      .then(handleSaveExpenseResponse)
      .catch(handleError);
  } else {
    return axios
      .post(url, expense)
      .then(handleSaveExpenseResponse)
      .catch(handleError);
  }
}

export function deleteExpense(id) {
  const url = `${baseUrl}/${id}`;
  return axios
    .delete(url)
    .then(handleDeleteExpenseResponse)
    .catch(handleError);
}