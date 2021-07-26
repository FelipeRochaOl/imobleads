import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Locations extends BaseSchema {
  protected tableName = 'locations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().primary()
      table.bigInteger('client_id').nullable()
      table.string('country').defaultTo('Brasil')
      table.string('state')
      table.string('city')
      table.string('zone').nullable()
      table.string('neighborhood')
      table.string('address')
      table.string('street_number').defaultTo('SN')
      table.string('complement').nullable()
      table.string('postalcode')
      table.string('latitude').nullable()
      table.string('longitude').nullable()
      table.boolean('primary').defaultTo(false).comment('Endereço principal')
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
