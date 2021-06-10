import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateFkPropertiesUsersClients extends BaseSchema {
  protected tableName = 'properties'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .foreign('client_id', 'fk_properties_clients')
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .foreign('location_id', 'fk_properties_location')
        .references('id')
        .inTable('locations')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .foreign('contact_id', 'fk_properties_contact')
        .references('id')
        .inTable('contacts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('client_id', 'fk_properties_clients')
      table.dropForeign('location_id', 'fk_properties_location')
      table.dropForeign('contact_id', 'fk_properties_contact')
    })
  }
}
