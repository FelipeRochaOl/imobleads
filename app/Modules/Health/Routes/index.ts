import Route from '@ioc:Adonis/Core/Route'

Route.get('health', 'HealthController.index').prefix('api').as('health.index')

export default Route
