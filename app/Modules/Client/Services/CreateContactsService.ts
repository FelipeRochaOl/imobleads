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

  public async execute(data: IContactDTO): Promise<Contact> {
    const contact = await this.contactRepository.create(data)

    if (!contact) {
      throw new Error('Unable to register the contact')
    }

    return contact
  }
}
