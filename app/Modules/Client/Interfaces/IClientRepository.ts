import { IClientDTO } from '../DTOs/IClientDTO'
import Client from '../Models/Client'

export interface IClientRepository {
  findAll(): Promise<Client[]>
  create(data: IClientDTO): Promise<Client>
  findById(id: number): Promise<Client | null>
  update(data: Partial<IClientDTO>): Promise<Client | undefined>
  delete(id: number): Promise<Client | null>
}
