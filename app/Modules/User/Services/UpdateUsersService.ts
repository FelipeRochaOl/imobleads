import { inject, injectable } from 'tsyringe'
import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { IUpdateUserDTO } from '../DTOs/IUpdateUserDTO'
import { IUserRepository } from '../Interfaces/IUserRepository'

@injectable()
export default class UpdateUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(data: IUpdateUserDTO): Promise<LucidRow | null> {
    const user = await this.userRepository.update(data)

    if (!user) {
      throw Error('Unable to update user')
    }

    return user
  }
}
