import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Modules/User/Models/User'
import Client from 'App/Modules/Client/Models/Client'

export default class ClientPolicy extends BasePolicy {
  public async before(user: User) {
    if (user.role === 'admin') {
      return true
    }

    return this.onlyRealStateAndRealtor(user)
  }

  public async viewList(user: User) {
    return this.onlyRealStateAndRealtor(user)
  }

  public async view(user: User, client: Client) {
    return this.isAuthorizeRealStateAndRealtor(user, client)
  }

  public async create(user: User) {
    return this.onlyRealStateAndRealtor(user)
  }

  public async update(user: User, client: Client) {
    return this.isAuthorizeRealStateAndRealtor(user, client)
  }

  public async delete(user: User, client: Client) {
    return this.isAuthorizeRealStateAndRealtor(user, client)
  }

  private async onlyRealStateAndRealtor(user: User) {
    if (user.role !== 'client') {
      return true
    }

    return false
  }

  private async isAuthorizeRealStateAndRealtor(user: User, client: Client) {
    if (user.client.id === client.belongsToTheClientId) {
      return true
    }

    if (user.id === client.userId) {
      return true
    }

    return false
  }
}
