import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { injectable, inject } from 'tsyringe'
import { IFindUserDTO } from '../DTOs/IFindUserDTO'

import { IUserRepository } from '../Interfaces/IUserRepository'

@injectable()
export default class FindUserService {
  private findUser: LucidRow | null

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute({ email, id }: IFindUserDTO): Promise<LucidRow | null> {
    this.findUser = email ? await this.userRepository.findByEmail(email) : null
    this.findUser = id ? await this.userRepository.findById(id) : null

    if (!this.findUser) {
      throw new Error("We didn't find any users with this e-mail")
    }

    return this.findUser
  }
}
