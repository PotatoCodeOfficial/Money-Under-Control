import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const baseUrl = process.env.API_URL + "/expenses/";

export function getExpenses() {
    return axios
        .get(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}