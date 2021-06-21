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

import Client from './Client'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_id: number

  @hasOne(() => Client, {
    foreignKey: 'fk_contacts_clients',
    localKey: 'client_id',
  })
  public clientId: HasOne<typeof Client>

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public website: string

  @column()
  public logo: string

  @column()
  public office_name: string

  @column()
  public primary: boolean

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
