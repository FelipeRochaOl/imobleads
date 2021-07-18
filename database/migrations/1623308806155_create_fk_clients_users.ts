import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateFkClientsUsers extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .foreign('user_id', 'fk_clients_users')
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')

      table
        .foreign('belongs_to_the_client_id', 'fk_belongs_to_client')
        .references('id')
        .inTable('clients')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('user_id', 'fk_clients_users')
      table.dropForeign('belongs_to_the_client_id', 'fk_belongs_to_client')
    })
  }
}
