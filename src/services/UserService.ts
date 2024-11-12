import { AppDataSource } from '../config/database';
import { User } from '../entities/User';

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async getUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}