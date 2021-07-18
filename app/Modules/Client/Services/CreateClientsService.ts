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

  public async execute({
    belongs_to_the_client_id,
    cpf,
    cnpj,
    creci,
    ...data
  }: Partial<IClientDTO>): Promise<Client> {
    if (!belongs_to_the_client_id) {
      throw new Error('User is not authenticated')
    }

    await this.existsClientInDatabase('cpf', cpf)
    await this.existsClientInDatabase('cnpj', cnpj)
    await this.existsClientInDatabase('creci', creci)

    const newData = Object.assign(
      {},
      {
        belongs_to_the_client_id,
        cpf,
        cnpj,
        creci,
        ...data,
      }
    )
    const client = await this.clientRepository.create(newData)

    if (!client) {
      throw new Error('Unable to register the client')
    }

    return client
  }

  protected async existsClientInDatabase(
    column: string,
    value: any
  ): Promise<boolean | Error> {
    if (!column || !value) return false

    const exists = await this.clientRepository.findByUniqueIdentification({
      [column]: value,
    })

    if (parseInt(exists.$extras.count) > 0) {
      throw new Error(`Customer already registered with this ${column}`)
    }

    return false
  }
}
