import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

// Adding Authorization header if token exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Make sure token is saved after login
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default API;
