import { injectable, inject } from 'tsyringe'
import { IFindUserDTO } from '../DTOs/IFindUserDTO'

import { IUserRepository } from '../Interfaces/IUserRepository'
import User from '../Models/User'

@injectable()
export default class FindUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute({ email, id }: IFindUserDTO): Promise<User> {
    let findUser: User[] = []

    if (email) {
      findUser = await this.userRepository.findByEmail(email)
    }

    if (id) {
      findUser = await this.userRepository.findById(id)
    }

    if (!findUser || !findUser.length) {
      throw new Error("We didn't find any users with this id or e-mail")
    }

    const [user] = findUser
    return user
  }
}
