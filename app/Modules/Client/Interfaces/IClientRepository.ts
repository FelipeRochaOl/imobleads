import { IClientDTO } from '../DTOs/IClientDTO'
import Client from '../Models/Client'

interface IFindClient {
  realtor_id: number
  client_id: number | undefined
  isAdmin: boolean
}

interface IFindAllClients {
  realtor_id: number
  isAdmin: boolean
}

export interface IClientRepository {
  findAll(data: IFindAllClients): Promise<Client[]>
  create(data: Partial<IClientDTO>): Promise<Client>
  findById(data: IFindClient): Promise<Client[]>
  findByUniqueIdentification([string]: any): Promise<Client>
  update(data: Partial<IClientDTO>): Promise<Client | undefined>
  delete(id: number): Promise<Client | null>
}
