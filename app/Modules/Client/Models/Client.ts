import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeFetch,
  beforeFind,
  BelongsTo,
  belongsTo,
  column,
  hasMany,
  HasMany,
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
  public userId: string

  @belongsTo(() => User, {
    localKey: 'id', // id column on "User" model
  })
  public user: BelongsTo<typeof User>

  @column()
  public belongsToTheClientId: number

  @column()
  public name: string

  @column()
  public cpf: string

  @column()
  public cnpj: string

  @column()
  public creci: string

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
