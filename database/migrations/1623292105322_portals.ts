import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Portals extends BaseSchema {
  protected tableName = 'portals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().primary()
      table.string('name').notNullable()
      table.integer('limit_amount_ads').defaultTo(0)
      table.integer('limit_amount_featured_ads').defaultTo(0)
      table.integer('used_amount_ads').defaultTo(0)
      table.integer('used_amount_featured_ads').defaultTo(0)
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()

      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .withKeyName('fk_portals_users')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('user_id', 'fk_portals_users')
    })
    this.schema.dropTable(this.tableName)
  }
}
