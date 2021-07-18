import { inject, injectable } from 'tsyringe'

import { IClientRepository } from '../Interfaces/IClientRepository'
import { IClientUpdateData } from '../Interfaces/IClientUpdateData'

import Client from '../Models/Client'

@injectable()
export default class UpdateClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute({ auth, data }: IClientUpdateData): Promise<Client> {
    data.belongs_to_the_client_id = auth.user?.client.id
    const client = await this.clientRepository.update(data)

    if (!client) {
      throw new Error('Unable to update the client')
    }

    return client
  }
}
