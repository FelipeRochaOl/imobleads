import { AuthContract, GuardsList } from '@ioc:Adonis/Addons/Auth'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

import { container } from 'tsyringe'
import FindUserService from 'App/Modules/User/Services/FindUserService'

export default class AuthMiddleware {
  protected redirectTo = '/login'

  protected async authenticate(
    auth: HttpContextContract['auth'],
    guards: (keyof GuardsList)[]
  ) {
    let guardLastAttempted: string | undefined

    for (let guard of guards) {
      guardLastAttempted = guard

      if (await auth.use(guard).check()) {
        auth.defaultGuard = guard
        return true
      }
    }

    throw new AuthenticationException(
      'Unauthorized access',
      'E_UNAUTHORIZED_ACCESS',
      guardLastAttempted,
      this.redirectTo
    )
  }

  protected async updateUserAuth(auth: AuthContract) {
    if (!auth.user) {
      throw new Error('User not found')
    }

    await auth.user.load('client')
  }

  public async handle(
    { auth }: HttpContextContract,
    next: () => Promise<void>,
    customGuards: (keyof GuardsList)[]
  ) {
    const guards = customGuards.length ? customGuards : [auth.name]
    await this.authenticate(auth, guards)
    await this.updateUserAuth(auth)
    await next()
  }
}
