import { Request, Response } from 'express';
import { ApiError } from '../errors/api-error';
import UserService from '../services/user.service';


class UserController {

  public async getAllUsers(request: Request, response: Response) {
    const users = await UserService.getAllUsers();
    if (users instanceof ApiError) {
      return response.status(users.codeError).json(users.message);
    }
    response.status(200).json(users);
  }

  public async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const user = await UserService.getUserById(id);
    if (user instanceof ApiError) {
      return response.status(user.codeError).json(user.message);
    }
    response.status(200).json(user);
  }

  public async createUser(request: Request, response: Response) {
    const { email, password } = request.body;
    const createdUser = await UserService.createUser({ email, password });
    if (createdUser instanceof ApiError) {
      return response.status(createdUser.codeError).json(createdUser.message);
    }
    response.status(201).json();
  }

  public async updateUser(request: Request, response: Response) {
    const { email, password } = request.body;
    const { id } = request.params;
    const updatedUser = await UserService.updateUser({ id, email, password });
    if (updatedUser instanceof ApiError) {
      return response.status(updatedUser.codeError).json(updatedUser.message);
    }
    response.status(200).json();
  }

  public async deleteAllUsers(request: Request, response: Response) {
    await UserService.deleteAllUsers();
    response.status(200).send();
  }

  public async deleteUserById(request: Request, response: Response) {
    const { id } = request.params;
    const userDeleted = await UserService.deleteUserById(id);
    if (userDeleted instanceof ApiError) {
      return response.status(userDeleted.codeError).json(userDeleted.message);
    }
    response.status(200).json({ message: `User ${id} has been deleted` });
  }

}


export default UserController;
