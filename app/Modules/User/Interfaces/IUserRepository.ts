import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { ICreateUserDTO } from '../DTOS/ICreateUserDTO'
import { IUpdateUserDTO } from '../DTOS/IUpdateUserDTO'

export interface IUserRepository {
  findAll(): Promise<LucidRow[]>
  create(data: Omit<ICreateUserDTO, 'id'>): Promise<LucidRow>
  findById(id: string): Promise<LucidRow | null>
  findByEmail(email: string): Promise<LucidRow | null>
  update(data: IUpdateUserDTO): Promise<LucidRow | null>
  delete(id: string): Promise<LucidRow | null>
}
