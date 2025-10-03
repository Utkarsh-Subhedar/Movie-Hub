import axios from "axios";
const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const api = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: { Authorization: "bearer " + API_TOKEN },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
