import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().primary()
      table
        .uuid('user_id')
        .nullable()
        .comment('Este cliente também é um usuário?')
      table
        .bigInteger('belongs_to_the_client_id')
        .nullable()
        .comment('Cliente pertence à qual cliente(imobiliária/corretor)?')
      table.string('name')
      table.string('cpf').unique().nullable()
      table.string('cnpj').unique().nullable()
      table.string('creci').unique().nullable()
      table
        .enum('type', ['Corretor', 'Imobiliária', 'Cliente'])
        .defaultTo('Cliente')
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
