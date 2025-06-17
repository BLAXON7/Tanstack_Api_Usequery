import axios from "axios";

export async function fetchdata() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = axios.get("https://jsonplaceholder.typicode.com/todos");
    return (await res).data;
  } catch (e) {
    console.error("Failed to fetch the api!");
    throw e;
  }
}``
