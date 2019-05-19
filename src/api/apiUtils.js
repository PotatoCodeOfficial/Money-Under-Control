export async function handleResponse(response) {
    if(response) return response.data;
    if(response.status === 400) {
        // Server side validation returns a string error message, so parse as json
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok");
}

// TODO: adding the error into logging service
export function handleError(error) {
    // ESLint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
}