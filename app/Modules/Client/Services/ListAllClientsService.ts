import { inject, injectable } from 'tsyringe'

import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class ListAllClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll()

    if (!clients) {
      throw new Error('No customers were found')
    }

    return clients
  }
}
