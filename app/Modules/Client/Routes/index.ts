import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('clients', 'Client/Controllers/ClientController').apiOnly()
  Route.resource(
    'clients/:client_id/contacts',
    'Client/Controllers/ContactController'
  ).apiOnly()
  Route.resource(
    'clients/:client_id/locations',
    'Client/Controllers/LocationController'
  ).apiOnly()
})
  .prefix('api')
  .middleware(['auth', 'clientAuthorization'])
