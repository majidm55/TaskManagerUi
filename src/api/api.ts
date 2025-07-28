import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5157/api";
const api = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
