import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('plans', 'Portal/Controllers/PlanController').apiOnly()
})
  .prefix('api')
  .middleware(['auth'])
