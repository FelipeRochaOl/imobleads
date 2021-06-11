import { LucidModel, LucidRow } from '@ioc:Adonis/Lucid/Orm'

import { ICreateUserDTO } from '../DTOS/ICreateUserDTO'
import { IUserRepository } from '../Interfaces/IUserRepository'
import { softDelete } from 'App/Shared/Services/LucidSoftDelete'

import User from '../Models/User'

export default class UserRepository implements IUserRepository {
  private ormRepository: LucidModel

  constructor() {
    this.ormRepository = User
  }

  public async findAll(): Promise<LucidRow[]> {
    const users = await this.ormRepository.all()
    return users
  }

  public async create(data: Omit<ICreateUserDTO, 'id'>): Promise<LucidRow> {
    const newUser = await this.ormRepository.create(data)
    return newUser
  }

  public async findById(id: string): Promise<LucidRow | null> {
    const findUser = await this.ormRepository.findBy('id', id)
    return findUser
  }

  public async findByEmail(email: string): Promise<LucidRow | null> {
    const findUser = await this.ormRepository.findBy('email', email)
    return findUser
  }

  public async update({
    id,
    ...data
  }: ICreateUserDTO): Promise<LucidRow | null> {
    const user = await this.ormRepository.findBy('id', id)

    if (user) {
      await user.merge(data).save()
    }

    return user
  }

  public async delete(id: string): Promise<LucidRow | null> {
    const user = await this.ormRepository.findBy('id', id)

    if (user) {
      await softDelete(user)
    }

    return user
  }
}
