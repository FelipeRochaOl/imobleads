import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Modules/User/Models/User'

export default class UserPolicy extends BasePolicy {
  public async before(user: User | null) {
    if (user && user.role === 'admin') {
      return true
    }
  }

  public async viewAll() {
    return false
  }

  public async view(user: User, auth: AuthContract) {
    if (!auth.user) return false

    return auth.user.id === user.id
  }
}
