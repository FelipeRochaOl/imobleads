import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Locations extends BaseSchema {
  protected tableName = 'locations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().primary()
      table.bigInteger('client_id').nullable()
      table.string('country')
      table.string('state')
      table.string('city')
      table.string('zone')
      table.string('neighborhood')
      table.string('address')
      table.string('street_number')
      table.string('complement')
      table.string('postalcode')
      table.string('latitude')
      table.string('longitude')
      table.boolean('primary').defaultTo(false)
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
