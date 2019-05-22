import { handleError } from "./apiUtils";
import axios from "axios";

const baseUrl = "http://localhost:3000/categories/";

async function hadleGetCategories(response) {
  if (response)
    return response.data.map(category => {
      return {
        id: category.id,
        name: category.name,
        category_type: category.category_type,
        icon: category.icon
      };
    });
  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

export function getNonDeletedCategories() {
  return axios
    .get(baseUrl)
    .then(hadleGetCategories)
    .catch(handleError);
}
