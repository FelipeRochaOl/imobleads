import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersRoles extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .enum('role', ['admin', 'corretor', 'imobiliaria', 'cliente'])
        .defaultTo('cliente')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('role')
    })
  }
}
