import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Client from 'App/Modules/Client/Models/Client'
import FindClientService from 'App/Modules/Client/Services/FindClientService'

import { IClientFindData } from 'App/Modules/Client/Interfaces/IClientFindData'
import { IClientDTO } from 'App/Modules/Client/DTOs/IClientDTO'

export default class ClientAuthorization {
  public async handle(
    { bouncer, request, auth }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const params = request.params()
    const { id } = params as IClientDTO
    await bouncer.with('ClientPolicy').authorize('before')

    if (id) {
      const [client] = await this.getClient({ auth, client_id: id })
      await bouncer.with('ClientPolicy').authorize('delete', client)
      await bouncer.with('ClientPolicy').authorize('update', client)
      await bouncer.with('ClientPolicy').authorize('view', client)
    }

    await bouncer.with('ClientPolicy').authorize('create')
    await bouncer.with('ClientPolicy').authorize('viewList')

    await next()
  }

  private async getClient({
    auth,
    client_id,
  }: IClientFindData): Promise<Client[]> {
    const findClientService = container.resolve(FindClientService)

    return await findClientService.execute({ auth, client_id })
  }
}
