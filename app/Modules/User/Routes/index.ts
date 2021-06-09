import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('users', 'User/Controller/UserController').except(['edit', 'store', 'show'])
  Route.get('/users/:id?', 'User/Controller/UserController.show').as('user.show')
}).prefix('api')
