import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IContactDTO } from '../DTOs/IContactDTO'

import ListAllContactsService from '../Services/ListAllContactsService'
import CreateContactsService from '../Services/CreateContactsService'
import FindContactService from '../Services/FindContactService'
import UpdateContactsService from '../Services/UpdateContactsService'
import DeleteContactsService from '../Services/DeleteContactsService'

export default class ContactController {
  public async index({ response }: HttpContextContract) {
    const listContactService = container.resolve(ListAllContactsService)
    const contact = await listContactService.execute()

    return response.standart({
      message: 'No contacts found',
      success: true,
      data: contact,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const data: Record<'contact', IContactDTO> = request.body()

    const createContactService = container.resolve(CreateContactsService)
    const contact = await createContactService.execute(data.contact)

    return response.standart({
      message: 'Contact saved successfully',
      success: true,
      data: contact,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: Record<'contact', number> = request.params()

    const findContactService = container.resolve(FindContactService)
    const contact = await findContactService.execute(id.contact)

    return response.standart({
      message: 'Contact found successfully',
      success: true,
      data: contact,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const data: Record<'contact', Partial<IContactDTO>> = request.body()

    const updateContactService = container.resolve(UpdateContactsService)
    const contact = await updateContactService.execute(data.contact)

    return response.standart({
      message: 'Contact updated successfully',
      success: true,
      data: contact,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: Record<'contact', number> = request.params()

    const deleteContactService = container.resolve(DeleteContactsService)
    const contact = await deleteContactService.execute(id.contact)

    return response.standart({
      message: 'Contact deleted successful',
      success: true,
      data: contact,
    })
  }
}
