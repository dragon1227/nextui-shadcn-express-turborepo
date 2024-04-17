import { T_ApiResponse } from "@repo/types";
import { T_User } from "@repo/types";
import type { Request, Response } from "express";

export const getProfile = async (req: Request, res: Response) => {
  const user = res.locals.user as T_User;
  return res.json({
    data: user,
    success: true,
    message: "success",
  } as T_ApiResponse<T_User>);
};
