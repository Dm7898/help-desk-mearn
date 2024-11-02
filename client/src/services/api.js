import axios from "axios";

const API = axios.create({ baseURL: "https://help-desk-frb9.onrender.com" });

// Adding Authorization header if token exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Make sure token is saved after login
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default API;
