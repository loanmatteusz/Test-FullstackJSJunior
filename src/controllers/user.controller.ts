import { Request, Response } from 'express';
import { ApiError } from '../errors/api-error';
import UserService from '../services/user-service';

class UserController {

  public async getAllUsers(request: Request, response: Response) {
    const users = await UserService.getAllUsers();
    if (users instanceof ApiError) {
      response.status(users.codeError).json(users.message);
    }
    response.status(200).json(users);
  }

  public async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const user = await UserService.getUserById(id);
    if (user instanceof ApiError) {
      response.status(user.codeError).json(user.message);
    }
    response.status(200).json(user);
  }

  public async createUser(request: Request, response: Response) {
    const { email, password } = request.body;
    const createdUser = await UserService.createUser({ email, password });
    if (createdUser instanceof ApiError) {
      response.status(createdUser.codeError).json(createdUser.message);
    }
    response.status(201).json();
  }
  
}


export default UserController;
