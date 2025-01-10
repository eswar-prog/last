import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://eswar.up.railway.app/api",
  withCredentials: true,
});
