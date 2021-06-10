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
      table.double('property_administration_fee').comment('condomínio')
      table.double('yearly_tax').comment('IPTU')
      table.text('description')
      table.string('property_type')
      table.string('living_area')
      table.double('living_area_unit')
      table.string('lot_area')
      table.double('lot_area_unit')
      table.json('features')
      table.json('warranties')
      table.integer('bathrooms')
      table.integer('bedrooms')
      table.integer('garage')
      table.integer('suites')
      table.enum('usage_type', [
        'Residential',
        'Commercial',
        'Residential / Commercial',
      ])
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
