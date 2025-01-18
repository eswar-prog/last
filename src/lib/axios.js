import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://back-test-3nrb.onrender.com/api",
  withCredentials: true,
});
