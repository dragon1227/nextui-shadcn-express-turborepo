/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosInstance } from "axios";
import axios from "axios";
import { getSession } from "next-auth/react";
import { apiBaseUrl } from "@/config/const";

const apiClient: AxiosInstance = axios.create({
  baseURL: `${apiBaseUrl}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config: any) => {
    const session = await getSession();
    // @ts-expect-error custom defined
    const access_token = session?.sessionToken as string;
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
