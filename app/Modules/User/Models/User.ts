import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { uuid } from 'uuidv4'

import {
  column,
  beforeSave,
  BaseModel,
  beforeFind,
  beforeFetch,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm'

import {
  softDelete,
  softDeleteQuery,
} from 'App/Shared/Services/LucidSoftDelete'

import Client from 'App/Modules/Client/Models/Client'

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public role: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime

  @hasOne(() => Client, {
    localKey: 'id', // id column on "User" model
  })
  public client: HasOne<typeof Client>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeSave()
  public static async uuidGenerate(user: User) {
    if (user.$dirty.id || !user.id) {
      user.id = uuid()
    }
  }

  @beforeFind()
  public static softDeletesFind = softDeleteQuery

  @beforeFetch()
  public static softDeletesFetch = softDeleteQuery

  public async softDelete(column?: string) {
    await softDelete(this, column)
  }
}
