import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://eswar.up.railway.app/api" : "/api",
  withCredentials: true,
});
