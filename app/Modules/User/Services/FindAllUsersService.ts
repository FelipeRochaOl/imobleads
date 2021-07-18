import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { injectable, inject } from 'tsyringe'

import { IUserRepository } from '../Interfaces/IUserRepository'

@injectable()
export default class FindAllUsersServices {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<LucidRow[]> {
    const users = this.userRepository.findAll()

    if (!users) {
      throw new Error('No users were found')
    }

    return users
  }
}
