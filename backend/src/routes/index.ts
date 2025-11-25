import { Router } from "express";
import { authRouter } from "./authRouter";
import { searchRouter } from "./searchRouter";

export const router = Router();

router.use("/auth", authRouter);
router.use("/search", searchRouter);