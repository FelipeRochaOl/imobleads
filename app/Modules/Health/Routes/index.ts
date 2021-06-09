import Route from '@ioc:Adonis/Core/Route'
import HealthController from '../Controller/HealthController'

const healthController = new HealthController()

Route.get('health', healthController.index).prefix('api')

export default Route
