import Route from '@ioc:Adonis/Core/Route'

Route.get('health', 'Health/Controllers/HealthController.index')
  .prefix('api')
  .as('health.index')

export default Route
