import { LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { ICreateUserDTO } from '../DTOs/ICreateUserDTO'
import { IUpdateUserDTO } from '../DTOs/IUpdateUserDTO'

export interface IUserRepository {
  findAll(): Promise<LucidRow[]>
  create(data: ICreateUserDTO): Promise<LucidRow>
  findById(id: string): Promise<LucidRow | null>
  findByEmail(email: string): Promise<LucidRow | null>
  update(data: IUpdateUserDTO): Promise<LucidRow | null>
  delete(id: string): Promise<LucidRow | null>
}
