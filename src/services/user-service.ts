import connection from '../database/connection';
import BcryptHash from '../utils/bcrypt-hash';
import { ApiError } from '../errors/api-error';
import { emailRegex } from '../utils/validate-email.util';


interface IUser {
  email: string;
  password: string;
}

class UserService {
  
  public async createUser({ email, password }: IUser) {
    try {
      const emailIsValid = emailRegex.test(email);
      if (!emailIsValid) {
        return new ApiError(400, "This email is invalid.");
      }
      const hashedPassword = await (new BcryptHash().generateHash(password));
      await connection('users').insert({
        email,
        password: hashedPassword,
      });
    }
    catch (err: any) {
      return new ApiError(500, err.detail);
    }
  }

  public async getAllUsers() {
    try {
      const users = await connection('users').select('*');
      return users;
    }
    catch (err: any) {
      return new ApiError(500, err.detail);
    }
  }

  public async getUserById(id: string) {
    try {
      const user = await connection('users').where('id', id);
      return user;
    }
    catch(err: any) {
      return new ApiError(404, err.detail);
    }
  }

}

export default new UserService();
