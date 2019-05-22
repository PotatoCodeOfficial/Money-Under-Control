import { handleError } from "./apiUtils";
import moment from "moment";
import axios from "axios";

const baseUrl = "http://localhost:3000/incomes/";

async function hadleGetIncomes(response) {
  if (response)
    return response.data.map(income => {
      return {
        id: income.id,
        amount: income.amount,
        name: income.name,
        date: moment.unix(income.date).format("MM/DD/YYYY"),
        category_name: income.category.name,
        category: income.category.id,
        icon: income.category.icon
      };
    });
  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

export function getNonDeletedIncomes() {
  const url = `${baseUrl}?uid=PPtk6UoXaGW3IowzEpjrqxmZS2O2`;
  return axios
    .get(url)
    .then(hadleGetIncomes)
    .catch(handleError);
}
