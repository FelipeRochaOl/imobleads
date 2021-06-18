import { IClientDTO } from '../DTOs/IClientDTO'
import { IClientRepository } from '../Interfaces/IClientRepository'
import Client from '../Models/Client'

export default class ClientRepository implements IClientRepository {
  public async findAll(): Promise<Client[]> {
    return await Client.all()
  }

  public async create(data: IClientDTO): Promise<Client> {
    return await Client.create(data)
  }

  public async findById(id: number): Promise<Client | null> {
    return await Client.findBy('id', id)
  }

  public async update({
    id,
    ...data
  }: Partial<IClientDTO>): Promise<Client | undefined> {
    const client = await Client.findBy('id', id)
    return await client?.merge(data).save()
  }

  public async delete(id: number): Promise<Client | null> {
    const client = await Client.findBy('id', id)
    client?.softDelete()
    return client
  }
}
