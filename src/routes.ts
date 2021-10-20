import { Router } from "express";
import UserController from './controllers/user.controller';

const routes = Router();

routes.use('/users', UserController);

export default routes;