import { Router } from "express";
import UserRouter from "./routes/user.routes";

const routes = Router();

routes.use('/users', UserRouter);

export default routes;
