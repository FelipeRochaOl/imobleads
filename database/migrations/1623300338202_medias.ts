import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medias extends BaseSchema {
  protected tableName = 'medias'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().primary()
      table.bigInteger('property_id').notNullable()
      table.string('path_media').notNullable()
      table.enum('medium', ['image', 'video']).defaultTo('image')
      table.string('caption')
      table.boolean('primary').defaultTo(false)
      table.string('virtual_tour_link')
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
