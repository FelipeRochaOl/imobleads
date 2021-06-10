import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateFkMediasProperties extends BaseSchema {
  protected tableName = 'medias'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .foreign('property_id', 'fk_medias_properties')
        .references('id')
        .inTable('properties')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('property_id', 'fk_medias_properties')
    })
  }
}
