import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Properties extends BaseSchema {
  protected tableName = 'properties'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().primary()
      table.string('listingID').notNullable()
      table.bigInteger('client_id').notNullable()
      table.bigInteger('location_id').notNullable()
      table.bigInteger('contact_id').notNullable()
      table
        .enum('transaction_type', ['For Sale', 'For Rent', 'Sale/Rent'])
        .defaultTo('Sale/Rent')
      table.string('title').notNullable()
      table.string('currency').defaultTo('BRL')
      table.double('price')
      table.double('rental_price')
      table
        .enum('period', ['Monthly', 'Daily', 'Weekly', 'Quarterly', 'Yearly'])
        .defaultTo('Monthly')
      table
        .enum('public_type', ['STANDARD', 'PREMIUM', 'SUPER_PREMIUM'])
        .defaultTo('STANDARD')
      table
        .double('property_administration_fee')
        .comment('condomínio')
        .nullable()
      table.double('yearly_tax').comment('IPTU').nullable()
      table.text('description')
      table.string('property_type')
      table.double('living_area').defaultTo(0)
      table.string('living_area_unit').defaultTo('square metres')
      table.double('lot_area').defaultTo(0)
      table.string('lot_area_unit').defaultTo('square metres')
      table.json('features').nullable()
      table.json('warranties').nullable()
      table.integer('bathrooms').defaultTo(0)
      table.integer('bedrooms').defaultTo(0)
      table.integer('garage').defaultTo(0)
      table.integer('suites').defaultTo(0)
      table
        .enum('usage_type', [
          'Residential',
          'Commercial',
          'Residential / Commercial',
        ])
        .defaultTo('Residential')
      table.integer('year_built')
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
