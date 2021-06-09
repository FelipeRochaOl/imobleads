import Route from '@ioc:Adonis/Core/Route'
import SessionController from '../Controller/SessionController'

const sessionController = new SessionController()

Route.group(() => {
  Route.post('/login', sessionController.create).as('login')
}).prefix('api')
