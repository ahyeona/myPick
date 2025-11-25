import { Router } from "express";
import { genreSearchController, popularSearchController, keywordSearchController } from "../controllers/searchController";

export const searchRouter = Router();

searchRouter.get("/keyword", keywordSearchController);
searchRouter.get("/genre", genreSearchController);
searchRouter.get("/popular", popularSearchController);