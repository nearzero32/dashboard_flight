import axios from "axios";
import router from "../router/index";

const axiosInstance = axios.create({
  baseURL: "https://api.shahrazad-iq.com/api/web",
  timeout: 100000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = JSON.parse(token) ?? "";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error in axios response interceptor:', error);

    if (error.response && error.response.status === 401) {
      // يمكنك هنا تنفيذ التحكم في حالة الخروج أو إعادة التوجيه
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
      console.log('Unauthorized')
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
