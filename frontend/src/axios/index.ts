import axios from "axios";
import { useAuthStore } from "../store/authStore";

const baseURL = "http://localhost:8080"

const baseAxios = axios.create({
  baseURL,
  withCredentials: true,
});

baseAxios.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


baseAxios.interceptors.response.use((res) => res, async (error) => {
  console.log("error", error);

  if (error.response?.status === 401) {
    alert("로그인이 필요합니다.");
  }

  if (error.response.data.message) {
    alert(error.response.data.message);
  }
});


// baseAxios.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     console.log("baseAxios.interceptors.response");

//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const res = await axios.post(
//           `${baseURL}/auth/refresh`,
//           {},
//           { withCredentials: true }
//         );

//         useAuthStore.getState().setAccessToken(res.data.accessToken);
//         originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

//         return axios(originalRequest);
//       } catch (err) {
//         useAuthStore.getState().clearAuth();
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export { baseAxios }