import axios from "axios";
const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: { Authorization: "bearer " + API_TOKEN },
});
