import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/user', 'UserController').except(['edit', 'store', 'show'])
  Route.get('/user/:id?', 'UserController.show').as('user.show')
}).prefix('api')
