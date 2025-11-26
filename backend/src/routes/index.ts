import { Router } from "express";
import { authRouter } from "./authRouter";
import { searchRouter } from "./searchRouter";
import { genreListController } from "../controllers/genreController";
import { authMiddleware } from "../middleware/authMiddleware";
import { mypickRouter } from "./mypickRouter";

export const router = Router();

router.use("/auth", authRouter);
router.use("/search", searchRouter);
router.get("/genres", genreListController);
router.use("/mypick", authMiddleware, mypickRouter);