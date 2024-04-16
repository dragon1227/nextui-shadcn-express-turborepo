export type T_ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};
