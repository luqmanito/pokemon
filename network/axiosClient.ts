import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
    return config;
  },
  (error) => {
    console.error("Error with Axios request interceptor:", error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    console.info(
      "\x1b[42m",
      response.status,
      response.config.url,
      response.config.params
    );
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(error);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
