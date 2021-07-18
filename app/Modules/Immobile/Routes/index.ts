import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource(
    'properties',
    'Immobile/Controllers/ImmobileController'
  ).apiOnly()
})
  .prefix('api')
  .middleware(['auth'])
