import { Router } from "express";
import { getProfile } from "./default";
import auth from "@/middleware/auth";

const router = Router();
router.get("/profile", auth, getProfile);

export default router;
