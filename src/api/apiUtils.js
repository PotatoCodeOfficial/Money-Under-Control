import moment from "moment";

/*export async function handleResponse(response) {
    if(response) return response.data;
    if(response.status === 400) {
        // Server side validation returns a string error message, so parse as json
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok");
}*/

// TODO: adding the error into logging service
export function handleError(error) {
  // ESLint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export async function handleResponse(response) {
  if (response)
    return response.data.map(resource => {
      return {
        id: resource.id,
        amount: resource.amount,
        name: resource.name,
        date: moment.unix(resource.date).format("MM/DD/YYYY"),
        category_name: resource.category.name,
        category: resource.category.id,
        icon: resource.category.icon
      };
    });
  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

export async function handleSaveIncomeResponse(response) {
  if (response) {
    return {
      id: response.data.id,
      amount: response.data.amount,
      name: response.data.name,
      date: moment.unix(response.data.date).format("MM/DD/YYYY"),
      category_name: response.data.category.name,
      category: response.data.category.id,
      icon: response.data.category.icon
    };
  }

  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}
