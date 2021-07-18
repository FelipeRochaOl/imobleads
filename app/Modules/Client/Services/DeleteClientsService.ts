import { inject, injectable } from 'tsyringe'

import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class DeleteClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute(id: number | undefined): Promise<Client> {
    if (!id) {
      throw new Error('Parameters were not sent correctly')
    }

    const client = await this.clientRepository.delete(id)

    if (!client) {
      throw new Error('Unable to delete the customer')
    }

    return client
  }
}
