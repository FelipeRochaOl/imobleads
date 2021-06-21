import { inject, injectable } from 'tsyringe'

import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class FindContactService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute(id: number): Promise<Contact> {
    const contact = await this.contactRepository.findById(id)

    if (!contact) {
      throw new Error('Unable to find the customer')
    }

    return contact
  }
}
