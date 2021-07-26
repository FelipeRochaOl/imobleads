import { IStorageProvider } from 'App/Shared/Interfaces/IStorageProvider'
import { inject, injectable } from 'tsyringe'

import { IContactDTO } from '../DTOs/IContactDTO'
import { IContactRepository } from '../Interfaces/IContactRepository'

import Contact from '../Models/Contact'

@injectable()
export default class UpdateContactsService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  public async execute({
    id,
    client_id,
    ...data
  }: Partial<IContactDTO>): Promise<Contact> {
    if (!client_id || !id) {
      throw new Error('No params ID to customer in request')
    }

    if (!data.logoUpload) {
      throw new Error('Undefined logo image')
    }

    const findContact = await this.contactRepository.findById(id)

    if (findContact?.logo) {
      await this.storageProvider.deleteFile(findContact.logo)
    }

    const image = data.logoUpload
    const pathName = `client/${client_id}`
    data.logo = await this.storageProvider.saveFile({ image, pathName })

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
