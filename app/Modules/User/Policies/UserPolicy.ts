import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Modules/User/Models/User'

export default class UserPolicy extends BasePolicy {
  public async before(user: User | null) {
    if (user && user.role === 'admin') {
      return true
    }

    return false
  }

  public async viewAll() {
    return false
  }
}
