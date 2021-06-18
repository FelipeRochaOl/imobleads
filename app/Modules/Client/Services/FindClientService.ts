import { inject, injectable } from 'tsyringe'

import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class FindClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute(id: number): Promise<Client> {
    const client = await this.clientRepository.findById(id)

    if (!client) {
      throw new Error('Unable to find the customer')
    }

    return client
  }
}
