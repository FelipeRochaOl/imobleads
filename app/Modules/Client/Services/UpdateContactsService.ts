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

  public async execute(data: Partial<IContactDTO>): Promise<Contact> {
    const contact = await this.contactRepository.update(data)

    if (!contact) {
      throw new Error('Unable to update the contact')
    }

    return contact
  }
}
