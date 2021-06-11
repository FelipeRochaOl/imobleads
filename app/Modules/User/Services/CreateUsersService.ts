import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { injectable, inject } from 'tsyringe'

import { ICreateUserDTO } from '../DTOS/ICreateUserDTO'
import { IUserRepository } from '../Interfaces/IUserRepository'

@injectable()
export default class CreateUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(data: Omit<ICreateUserDTO, 'id'>): Promise<LucidRow> {
    const users = this.userRepository.create(data)

    if (!users) {
      throw new Error('Error creating user')
    }

    return users
  }
}
