import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PlansUsers extends BaseSchema {
  protected tableName = 'plans_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.uuid('user_id')
      table.bigInteger('plan_id')
      table.date('valid_at')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table
        .foreign('user_id', 'fk_user')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .foreign('plan_id', 'fk_plan')
        .references('id')
        .inTable('plans')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('user_id', 'fk_user')
      table.dropForeign('plan_id', 'fk_plan')
    })
    this.schema.dropTable(this.tableName)
  }
}
