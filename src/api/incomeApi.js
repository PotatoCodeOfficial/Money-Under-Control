import { handleError, handleResponse, handleSaveIncomeResponse } from "./apiUtils";
import axios from "axios";

const baseUrl = "/incomes/";

export function getNonDeletedIncomes() {
  const url = baseUrl;
  return axios
    .get(url)
    .then(handleResponse)
    .catch(handleError);
}

export function saveIncome(income) {
  const url = baseUrl;
  if (income.id != null) {
    return axios
      .put(`${url}/${income.id}`, income)
      .then(handleSaveIncomeResponse)
      .catch(handleError);
  } else {
    return axios
      .post(url, income)
      .then(handleSaveIncomeResponse)
      .catch(handleError);
  }
}

export function deleteIncome(id) {
  const url = `${baseUrl}/${id}`;
  return axios
    .delete(url)
    .then(handleResponse)
    .catch(handleError);
}