import { Router } from "express";
import { authRouter } from "./authRouter";
import { searchRouter } from "./searchRouter";
import { genreListController } from "../controllers/genreController";

export const router = Router();

router.use("/auth", authRouter);
router.use("/search", searchRouter);
router.get("/genre", genreListController);