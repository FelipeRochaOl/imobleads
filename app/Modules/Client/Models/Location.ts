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

import Client from './Client'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_id: number

  @hasOne(() => Client, {
    foreignKey: 'fk_locations_clients',
    localKey: 'client_id',
  })
  public clientId: HasOne<typeof Client>

  @column()
  public country: string

  @column()
  public state: string

  @column()
  public city: string

  @column()
  public zone: string

  @column()
  public neighborhood: string

  @column()
  public address: string

  @column()
  public street_number: string

  @column()
  public complement: string

  @column()
  public postalcode: string

  @column()
  public latitude: string

  @column()
  public longitude: string

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
