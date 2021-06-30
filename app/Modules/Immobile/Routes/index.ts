import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('properties', 'ImmobileController').apiOnly()
})
  .prefix('api')
  .middleware(['auth'])
