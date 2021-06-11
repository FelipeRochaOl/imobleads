import { inject, injectable } from 'tsyringe'
import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { IUserRepository } from '../Interfaces/IUserRepository'

@injectable()
export default class DeleteUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<LucidRow | null> {
    const user = await this.userRepository.delete(id)

    if (!user) {
      throw Error('User cannot be deleted')
    }

    return user
  }
}
