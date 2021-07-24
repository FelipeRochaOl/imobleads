import { inject, injectable } from 'tsyringe'

import { IContactDTO } from '../DTOs/IContactDTO'
import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class CreateContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute({ client_id, ...data }: IContactDTO): Promise<Contact> {
    if (!client_id) {
      throw new Error('No params ID to customer in request')
    }

    const contact = await this.contactRepository.create({ client_id, ...data })

    if (!contact) {
      throw new Error('Unable to register the contact')
    }

    return contact
  }
}
