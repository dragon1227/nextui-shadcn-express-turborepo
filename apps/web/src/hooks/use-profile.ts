import { QUERY_KEYS } from "@/config/const";
import apiClient from "@/utils/apiClient";
import { T_ApiResponse } from "@repo/types/api";
import { T_User } from "@repo/types/user";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useProfile = () => {
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
          } else {
            throw new Error(data.message ?? "Error");
          }
        })
        .catch((error: AxiosError) => {
          // @ts-expect-error
          throw new Error(error.response?.data?.message ?? error.message);
        });
    },
  });
  return { ...query, queryKey };
};
