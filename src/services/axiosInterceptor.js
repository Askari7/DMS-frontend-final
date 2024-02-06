import axios from "axios";
import { store } from "../redux/store";
import { logoutUser } from "../redux/auth/authActions";

// Create an instance of Axios
const instance = axios.create({
  // Set your base URL and other configurations
  baseURL: process.env.BACKEND_URL,
  // ...
});

// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Retrieve the token from where you store it (e.g., local storage, state, etc.)
  const state = store.getState();
  const token = localStorage.getItem("token");

  // Set the token in the request headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    // If the response status is between 200 and 299, return the response as is
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  }
);

export default instance;
