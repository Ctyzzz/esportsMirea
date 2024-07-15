import axios from "axios";
import Cookies from "js-cookie";

export const TOKEN = "access";
const API_URL = import.meta.env.VITE_API_URL;

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : "",
  },
});

export default instance;
