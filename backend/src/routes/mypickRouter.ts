import { Router } from "express";
import { mypickCreateController, mypickDeleteController, mypickListController, mypickUpdateController } from "../controllers/mypickController";

export const mypickRouter = Router();

mypickRouter.get("/list", mypickListController);
mypickRouter.post("/create", mypickCreateController);
mypickRouter.post("/update", mypickUpdateController);
mypickRouter.post("/delete", mypickDeleteController);