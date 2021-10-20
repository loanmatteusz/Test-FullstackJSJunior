import Router from 'express';
import UserController from '../controllers/user.controller';

const UserRouter = Router();
const userController = new UserController();

UserRouter.get('/', userController.getAllUsers);
UserRouter.get('/:id', userController.getUserById);
UserRouter.post('/', userController.createUser);

export default UserRouter;
