import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('clients', 'ClientController').apiOnly()
})
  .prefix('api')
  .middleware(['api', 'auth'])
