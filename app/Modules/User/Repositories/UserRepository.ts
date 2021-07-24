import { ICreateUserDTO } from '../DTOs/ICreateUserDTO'
import { IUserRepository } from '../Interfaces/IUserRepository'
import { softDelete } from 'App/Shared/Services/LucidSoftDelete'

import User from '../Models/User'
import { IUpdateUserDTO } from '../DTOs/IUpdateUserDTO'

export default class UserRepository implements IUserRepository {
  public async findAll(): Promise<User[]> {
    return await User.all()
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await User.create(data)

    if (user instanceof User) {
      let clientData = JSON.parse(data.client)
      clientData.user_id = user.id
      const client = await user.related('client').create(clientData)

      if (!client) {
        await user.delete()
      }
    }

    const [newUser] = await this.findById(user.id)
    return newUser
  }

  public async findById(id: string): Promise<User[]> {
    return await User.query().preload('client').where('id', id)
  }

  public async findByEmail(email: string): Promise<User[]> {
    return await User.query().preload('client').where('email', email)
  }

  public async update({ id, ...data }: IUpdateUserDTO): Promise<User | null> {
    const user = await User.findBy('id', id)

    if (user) {
      await user.merge(data).save()
    }

    return user
  }

  public async delete(id: string): Promise<User | null> {
    const user = await User.findBy('id', id)

    if (user) {
      await softDelete(user)
    }

    return user
  }
}
