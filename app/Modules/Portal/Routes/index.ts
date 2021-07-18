import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('portals', 'Portal/Controllers/PortalController').apiOnly()
})
  .prefix('api')
  .middleware(['auth'])
