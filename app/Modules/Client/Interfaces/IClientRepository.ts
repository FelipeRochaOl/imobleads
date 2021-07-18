import { IClientDTO } from '../DTOs/IClientDTO'
import Client from '../Models/Client'

interface IFindClient {
  realtor_id: number
  client_id: number | undefined
}

export interface IClientRepository {
  findAll(id: number): Promise<Client[]>
  create(data: Partial<IClientDTO>): Promise<Client>
  findById(data: IFindClient): Promise<Client[]>
  findByUniqueIdentification([string]: any): Promise<Client>
  update(data: Partial<IClientDTO>): Promise<Client | undefined>
  delete(id: number): Promise<Client | null>
}
