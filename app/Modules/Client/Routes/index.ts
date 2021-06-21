import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('clients', 'ClientController').apiOnly()
  Route.resource('contacts', 'ContactController').apiOnly()
})
  .prefix('api')
  .middleware(['api', 'auth'])
