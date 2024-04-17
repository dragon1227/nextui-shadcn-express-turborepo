/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { T_ApiResponse, T_User } from "@repo/types";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import apiClient from "@/utils/api-client";
import { QUERY_KEYS } from "@/config/const";

const useProfile = () => {
  const queryKey = [QUERY_KEYS.profile];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return apiClient
        .get("/auth/profile")
        .then((response) => {
          return response.data as T_ApiResponse<T_User>;
        })
        .then((data: T_ApiResponse<T_User>) => {
          if (data.success) {
            const user = data.data;
            return user;
          }
          throw new Error(data.message ?? "Error");
        })
        .catch((error: AxiosError) => {
          throw new Error(
            // @ts-expect-error self defined
            (error.response?.data?.message ?? error.message) as string,
          );
        });
    },
  });
  return { ...query, queryKey };
};

export { useProfile };
