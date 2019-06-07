import { handleError, handleResponse } from "./apiUtils";
import axios from "axios";

const baseUrl = "/incomes/";

export function getNonDeletedIncomes() {
  const url = baseUrl;
  return axios
    .get(url)
    .then(handleResponse)
    .catch(handleError);
}
