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
    let income = response.data
    return {
      id: income.id,
      amount: income.amount,
      name: income.name,
      description: income.description,
      date: moment.unix(income.date).format("MM/DD/YYYY"),
      category_name: income.category.name,
      category: income.category.id,
      icon: income.category.icon
    };
  }

  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

export async function handleDeleteIncomeResponse(response) {
  return;
}

export async function handleSaveExpenseResponse(response) {
  if (response) {
    let expense = response.data
    return {
      id: expense.id,
      amount: expense.amount,
      name: expense.name,
      description: expense.description,
      date: moment.unix(expense.date).format("MM/DD/YYYY"),
      category_name: expense.category.name,
      category: expense.category.id,
      icon: expense.category.icon
    };
  }

  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

export async function handleDeleteExpenseResponse(response) {
  return;
}