import { IClientDTO } from '../DTOs/IClientDTO'
import { IClientRepository } from '../Interfaces/IClientRepository'
import Client from '../Models/Client'

export default class ClientRepository implements IClientRepository {
  public async findAll({ realtor_id, isAdmin }): Promise<Client[]> {
    if (isAdmin) {
      return await Client.query()
    }

    return await Client.query().where('belongs_to_the_client_id', realtor_id)
  }

  public async create(data: IClientDTO): Promise<Client> {
    return await Client.create(data)
  }

  public async findById({ realtor_id, client_id, isAdmin }): Promise<Client[]> {
    if (isAdmin) {
      return await Client.query().where('id', client_id)
    }

    return await Client.query()
      .where('id', client_id)
      .where('belongs_to_the_client_id', realtor_id)
  }

  public async findByUniqueIdentification(data) {
    const [column] = Object.keys(data)
    const [value] = Object.values<string>(data)
    const [client] = await Client.query().where(column, value).count(column)
    return client
  }

  public async update({
    id,
    belongs_to_the_client_id,
    ...data
  }: Partial<IClientDTO>): Promise<Client | undefined> {
    if (!id || !belongs_to_the_client_id) return

    const [client] = await Client.query()
      .where('id', id)
      .where('belongs_to_the_client_id', belongs_to_the_client_id)

    if (client instanceof Client) {
      return await client.merge(data).save()
    }

    return client
  }

  public async delete(id: number): Promise<Client | null> {
    const client = await Client.findBy('id', id)
    client?.softDelete()
    return client
  }
}
