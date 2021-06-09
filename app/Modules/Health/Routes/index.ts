import Route from '@ioc:Adonis/Core/Route'

Route.get('health', 'HealthController.index').prefix('api')

export default Route
