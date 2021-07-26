import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IContactDTO } from '../DTOs/IContactDTO'

import ListAllContactsService from '../Services/ListAllContactsService'
import CreateContactsService from '../Services/CreateContactsService'
import FindContactService from '../Services/FindContactService'
import UpdateContactsService from '../Services/UpdateContactsService'
import DeleteContactsService from '../Services/DeleteContactsService'

export default class ContactController {
  public async index({ response, request }: HttpContextContract) {
    const client_id: number | undefined = request.param('client_id')
    const listContactService = container.resolve(ListAllContactsService)
    const contact = await listContactService.execute(client_id)

    return response.standart({
      message: 'No contacts found',
      success: true,
      data: contact,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const client_id: number | undefined = request.param('client_id')
    const contactData = request.body()
    let data = contactData as IContactDTO

    data.logoUpload = request.file('logo', {
      size: '2mb',
      extnames: ['jpg', 'png'],
    })

    const createContactService = container.resolve(CreateContactsService)
    const contact = await createContactService.execute({ client_id, ...data })

    return response.standart({
      message: 'Contact saved successfully',
      success: true,
      data: contact,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number | undefined = request.param('id')
    const client_id: number | undefined = request.param('client_id')

    const findContactService = container.resolve(FindContactService)
    const contact = await findContactService.execute({ id, client_id })

    return response.standart({
      message: 'Contact found successfully',
      success: true,
      data: contact,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number | undefined = request.param('id')
    const client_id: number | undefined = request.param('client_id')
    const contactData = request.body()
    const data = contactData as IContactDTO

    data.logoUpload = request.file('logo', {
      size: '2mb',
      extnames: ['jpg', 'png'],
    })

    const updateContactService = container.resolve(UpdateContactsService)
    const contact = await updateContactService.execute({
      id,
      client_id,
      ...data,
    })

    return response.standart({
      message: 'Contact updated successfully',
      success: true,
      data: contact,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number | undefined = request.param('id')
    const client_id: number | undefined = request.param('client_id')

    const deleteContactService = container.resolve(DeleteContactsService)
    const contact = await deleteContactService.execute({ id, client_id })

    return response.standart({
      message: 'Contact deleted successful',
      success: true,
      data: contact,
    })
  }
}
