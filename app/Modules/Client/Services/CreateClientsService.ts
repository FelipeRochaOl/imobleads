import { inject, injectable } from 'tsyringe'

import { IClientDTO } from '../DTOs/IClientDTO'
import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class CreateClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute(data: IClientDTO): Promise<Client> {
    const client = await this.clientRepository.create(data)

    if (!client) {
      throw new Error('Unable to register the user')
    }

    return client
  }
}
