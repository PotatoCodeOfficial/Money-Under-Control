import { handleError, handleResponse } from "./apiUtils";
import axios from "axios";

const baseUrl = "/expenses/";

export function getNonDeletedExpenses() {
  const url = `${baseUrl}?uid=IAgIup6gKFaT7WnA0gx4YdPGGjz1`;
  return axios
    .get(url)
    .then(handleResponse)
    .catch(handleError);
}
