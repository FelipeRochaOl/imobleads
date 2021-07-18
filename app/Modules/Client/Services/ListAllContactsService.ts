import { inject, injectable } from 'tsyringe'

import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class ListAllContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute(): Promise<Contact[]> {
    const contacts = await this.contactRepository.findAll()

    if (!contacts) {
      throw new Error('No customers were found')
    }

    return contacts
  }
}
