import { inject, injectable } from 'tsyringe'
import { IClientFindData } from '../Interfaces/IClientFindData'

import { IClientRepository } from '../Interfaces/IClientRepository'

import Client from '../Models/Client'

@injectable()
export default class FindClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  public async execute({
    auth,
    client_id,
  }: IClientFindData): Promise<Client[]> {
    if (!auth.user) {
      throw new Error('User is not logged in')
    }

    if (!client_id) {
      throw new Error('Client is undefined')
    }

    const client = await this.clientRepository.findById({
      realtor_id: auth.user.client.id,
      client_id,
      isAdmin: auth.user.role === 'admin',
    })

    if (!client || !client.length) {
      throw new Error('Unable to find the customer')
    }

    return client
  }
}
