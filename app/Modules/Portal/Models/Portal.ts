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
} from 'App/Shared/Services/Database/LucidSoftDelete'

import User from 'App/Modules/User/Models/User'

export default class Portal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: string

  @hasOne(() => User, {
    foreignKey: 'fk_portals_users',
    localKey: 'user_id',
  })
  public userId: HasOne<typeof User>

  @column()
  public name: string

  @column()
  public limit_amount_ads: number

  @column()
  public limit_amount_featured_ads: number

  @column()
  public used_amount_ads: number

  @column()
  public used_amount_featured_ads: number

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
