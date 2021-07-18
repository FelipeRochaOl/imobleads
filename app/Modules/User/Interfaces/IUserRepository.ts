import { ICreateUserDTO } from '../DTOs/ICreateUserDTO'
import { IUpdateUserDTO } from '../DTOs/IUpdateUserDTO'
import User from '../Models/User'

export interface IUserRepository {
  findAll(): Promise<User[]>
  create(data: ICreateUserDTO): Promise<User>
  findById(id: string): Promise<User[]>
  findByEmail(email: string): Promise<User[]>
  update(data: IUpdateUserDTO): Promise<User | null>
  delete(id: string): Promise<User | null>
}
