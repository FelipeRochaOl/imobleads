import { inject, injectable } from 'tsyringe'

import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class ListAllContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute(client_id: number | undefined): Promise<Contact[]> {
    if (!client_id) {
      throw new Error('No params ID to customer in request')
    }

    const contacts = await this.contactRepository.findAll(client_id)

    if (!contacts) {
      throw new Error('No customers were found')
    }

    return contacts
  }
}
