import { IContactDTO } from '../DTOs/IContactDTO'
import { IContactRepository } from '../Interfaces/IContactRepository'
import Contact from '../Models/Contact'

export default class ContactRepository implements IContactRepository {
  public async findAll(client_id: number): Promise<Contact[]> {
    return await Contact.query().where('client_id', client_id)
  }

  public async create(data: IContactDTO): Promise<Contact> {
    return await Contact.create(data)
  }

  public async findById(id: number): Promise<Contact | null> {
    return await Contact.findBy('id', id)
  }

  public async update({
    id,
    ...data
  }: Partial<IContactDTO>): Promise<Contact | undefined> {
    const contact = await Contact.findBy('id', id)
    return await contact?.merge(data).save()
  }

  public async delete(id: number): Promise<Contact | null> {
    const contact = await Contact.findBy('id', id)
    contact?.softDelete()
    return contact
  }
}
