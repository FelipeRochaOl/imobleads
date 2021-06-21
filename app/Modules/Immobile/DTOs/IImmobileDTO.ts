interface IJson {
  [string: string]: string
}

export interface IImmobileDTO {
  id?: number
  listingID: string
  client_id: number
  location_id: number
  contact_id: number
  transaction_type: 'For Sale' | 'For Rent' | 'Sale/Rent'
  title: string
  currency?: string
  price?: number
  rental_price?: number
  period?: 'Monthly' | 'Daily' | 'Weekly' | 'Quarterly' | 'Yearly'
  public_type?: 'STANDARD' | 'PREMIUM' | 'SUPER_PREMIUM'
  property_administration_fee?: number
  yearly_tax?: number
  description: string
  property_type: string
  living_area?: number
  living_area_unit?: string
  lot_area?: number
  lot_area_unit?: string
  features?: IJson
  warranties?: IJson
  bathrooms?: number
  bedrooms?: number
  garage?: number
  suites?: number
  usage_type?: 'Residential' | 'Commercial' | 'Residential / Commercial'
  year_built?: number
}
