import Router from 'express';
import { ApiError } from '../errors/api-error';
import UserService from '../services/user-service';

const router = Router();

router.get('/', async (request, response) => {
  const users = await UserService.getAllUsers();
  if (users instanceof ApiError) {
    response.status(users.codeError).json(users.message);
  }
  response.status(200).json(users);
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const user = await UserService.getUserById(id);
  if (user instanceof ApiError) {
    console.log("akeeeeeee: ", user.message)
    response.status(user.codeError).json(user.message);
  }
  response.status(200).json(user);
});

router.post('/', async (request, response) => {
  const { email, password } = request.body;
  const createdUser = await UserService.createUser({ email, password });
  if (createdUser instanceof ApiError) {
    response.status(createdUser.codeError).json(createdUser.message);
  }
  response.status(201).json();
});

export default router;
