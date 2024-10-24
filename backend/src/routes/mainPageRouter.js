import { Router } from "express";
import { createLink, getLongUrl } from "../controller/linkController.js";

const mainPageRouter = Router();

mainPageRouter.post("/", createLink);

mainPageRouter.get("/:url", getLongUrl);

export default mainPageRouter;
