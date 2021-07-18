import { injectable, inject } from 'tsyringe'

import { ICreateUserDTO } from '../DTOs/ICreateUserDTO'
import { IUserRepository } from '../Interfaces/IUserRepository'
import User from '../Models/User'

@injectable()
export default class CreateUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(data: ICreateUserDTO): Promise<User> {
    const users = this.userRepository.create(data)

    if (!users) {
      throw new Error('Error creating user')
    }

    return users
  }
}
