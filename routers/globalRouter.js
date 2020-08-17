import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { login, getJoin, postJoin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);

export default globalRouter;
