import { apiBaseUrl } from "@/config/const";
import axios, { AxiosError, AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { getSession } from "next-auth/react";

const apiClient: AxiosInstance = axios.create({
  baseURL: apiBaseUrl + "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config: any) => {
    const session = await getSession();
    // @ts-expect-error
    const access_token = session?.sessionToken;
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default apiClient;
