import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserAuthorization {
  public async handle(
    { bouncer, request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    if (request.matchesRoute('users.index')) {
      await bouncer.with('UserPolicy').authorize('viewAll')
    }

    await next()
  }
}
