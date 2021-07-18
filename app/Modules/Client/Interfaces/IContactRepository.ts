import { IContactDTO } from '../DTOs/IContactDTO'
import Contact from '../Models/Contact'

export interface IContactRepository {
  findAll(): Promise<Contact[]>
  create(data: IContactDTO): Promise<Contact>
  findById(id: number): Promise<Contact | null>
  update(data: Partial<IContactDTO>): Promise<Contact | undefined>
  delete(id: number): Promise<Contact | null>
}
