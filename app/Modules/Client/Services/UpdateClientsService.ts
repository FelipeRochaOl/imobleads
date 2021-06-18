import { inject, injectable } from 'tsyringe'

import { IClientDTO } from '../DTOs/IClientDTO'
import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class UpdateClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute(data: Partial<IClientDTO>): Promise<Client> {
    const client = await this.clientRepository.update(data)

    if (!client) {
      throw new Error('Unable to update the client')
    }

    return client
  }
}
