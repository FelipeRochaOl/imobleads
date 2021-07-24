import { inject, injectable } from 'tsyringe'
import { IContactDTO } from '../DTOs/IContactDTO'

import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class FindContactService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository
  ) {}

  public async execute({
    client_id,
    id,
  }: Partial<IContactDTO>): Promise<Contact> {
    if (!client_id || !id) {
      throw new Error('No params ID to customer in request')
    }

    const contact = await this.contactRepository.findById(id)

    if (!contact) {
      throw new Error('Unable to find the customer')
    }

    return contact
  }
}
