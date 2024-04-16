import { jwtSecret } from "@/config/const";
import userModel from "@/models/user";
import { parseToken } from "@/services/auth";
import { log } from "@repo/logger";
import type { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = parseToken(tokenHeader);
  try {
    const payload = jwt.verify(token!, jwtSecret) as {
      name: string;
      email: string;
      image?: string;
    };
    if (!payload?.email) {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      let user = await userModel.findOne({ email: payload.email });
      if (!user) {
        user = await userModel.create({
          email: payload.email,
          name: payload.name,
          image: payload.image,
          providers: ["google"],
        });
      } else {
        if (payload.name && !user.name) user.name = payload.name;
        if (payload.image && !user.image) user.image = payload.image;
        await user.save();
      }
      res.locals.user = user;
    }
    next();
  } catch (err) {
    log(err);
    // @ts-expect-error
    res.status(403).json({ success: false, message: err.message });
  }
}
