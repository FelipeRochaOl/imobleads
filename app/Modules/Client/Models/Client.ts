import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeFetch,
  beforeFind,
  column,
  HasOne,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'

import {
  softDeleteQuery,
  softDelete,
} from 'App/Shared/Services/LucidSoftDelete'

import User from 'App/Modules/User/Models/User'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: string

  @hasOne(() => User, {
    foreignKey: 'fk_clients_users',
    localKey: 'user_id',
  })
  public userId: HasOne<typeof User>

  @column()
  public belongs_to_the_client_id: number

  @hasOne(() => Client, {
    foreignKey: 'fk_belongs_to_client',
    localKey: 'belongs_to_the_client_id',
  })
  public belongsToTheClientId: HasOne<typeof Client>

  @column()
  public name: string

  @column()
  public CPF: string

  @column()
  public CNPJ: string

  @column()
  public CRECI: string

  @column()
  public type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime

  @beforeFind()
  public static softDeletesFind = softDeleteQuery

  @beforeFetch()
  public static softDeletesFetch = softDeleteQuery

  public async softDelete(column?: string) {
    await softDelete(this, column)
  }
}
