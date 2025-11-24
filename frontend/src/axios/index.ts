import axios from "axios";
import { useAuthStore } from "../store/authStore";

const baseAxios = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

baseAxios.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { baseAxios }