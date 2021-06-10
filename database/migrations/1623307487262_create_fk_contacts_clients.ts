import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateFkContactsClients extends BaseSchema {
  protected tableName = 'contacts'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .foreign('client_id', 'fk_contacts_clients')
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('client_id', 'fk_contacts_clients')
    })
  }
}
