import { inject, injectable } from 'tsyringe'

import { IContactDTO } from '../DTOs/IContactDTO'
import { IContactRepository } from '../Interfaces/IContactRepository'
import { IStorageProvider } from 'App/Shared/Interfaces/IStorageProvider'

import Contact from '../Models/Contact'

@injectable()
export default class CreateContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  public async execute({ client_id, ...data }: IContactDTO): Promise<Contact> {
    if (!client_id) {
      throw new Error('No params ID to customer in request')
    }

    if (!data.logoUpload) {
      throw new Error('Undefined logo image')
    }

    const image = data.logoUpload
    const pathName = `client/${client_id}`
    data.logo = await this.storageProvider.saveFile({ image, pathName })

    const contact = await this.contactRepository.create({ client_id, ...data })

    if (!contact) {
      throw new Error('Unable to register the contact')
    }

    return contact
  }
}
