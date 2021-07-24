import { inject, injectable } from 'tsyringe'

import { IContactDTO } from '../DTOs/IContactDTO'
import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class UpdateContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute({
    id,
    client_id,
    ...data
  }: Partial<IContactDTO>): Promise<Contact> {
    if (!client_id || !id) {
      throw new Error('No params ID to customer in request')
    }

    const contact = await this.contactRepository.update({
      id,
      client_id,
      ...data,
    })

    if (!contact) {
      throw new Error('Unable to update the contact')
    }

    return contact
  }
}
