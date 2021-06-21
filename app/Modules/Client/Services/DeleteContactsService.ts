import { inject, injectable } from 'tsyringe'

import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class DeleteContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute(id: number): Promise<Contact> {
    const contact = await this.contactRepository.delete(id)

    if (!contact) {
      throw new Error('Unable to delete the customer')
    }

    return contact
  }
}
