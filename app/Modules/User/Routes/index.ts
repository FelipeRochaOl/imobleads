import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/', 'UserController').except(['edit', 'store', 'show'])
  Route.get('/:id?', 'UserController.show')
}).prefix('api/user')
