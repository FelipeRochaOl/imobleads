import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { inject, injectable } from 'tsyringe'

import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class ListAllClientsService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute(auth: AuthContract): Promise<Client[]> {
    if (!auth.user) {
      throw new Error('No user were found')
    }

    const clients = await this.clientRepository.findAll(auth.user.client.id)

    if (!clients) {
      throw new Error('No customers were found')
    }

    return clients
  }
}
