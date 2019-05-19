import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const baseUrl = "http://localhost:3000/expenses/";

export function getExpenses() {
  return axios
    .get(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
