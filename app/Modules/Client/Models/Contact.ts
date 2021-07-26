import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeFetch,
  beforeFind,
  afterFetch,
  column,
  HasOne,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Env from '@ioc:Adonis/Core/Env'

import {
  softDeleteQuery,
  softDelete,
} from 'App/Shared/Services/Database/LucidSoftDelete'

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
  public telephone: string

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

  @afterFetch()
  public static async getLogoUrl(contacts: Contact[]) {
    if (Env.get('DRIVE_STORAGE') === 's3') {
      await Promise.all(
        contacts.map((contact) => {
          return (contact.logo = `https://${Env.get(
            'AWS_DEFAULT_BUCKET'
          )}.s3.amazonaws.com/${contact.logo}`)
        })
      )
    }
  }

  @beforeFetch()
  public static softDeletesFetch = softDeleteQuery

  public async softDelete(column?: string) {
    await softDelete(this, column)
  }
}
