import { T_ApiResponse } from "@repo/types/api";
import { T_User } from "@repo/types/user";
import type { Request, Response } from "express";

export const getProfile = async (req: Request, res: Response) => {
  const user = res.locals.user as T_User;
  return res.json({
    data: user,
    success: true,
    message: "success",
  } as T_ApiResponse<T_User>);
};
