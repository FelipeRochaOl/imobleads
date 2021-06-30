import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('portals', 'PortalController').apiOnly()
})
  .prefix('api')
  .middleware(['auth'])
