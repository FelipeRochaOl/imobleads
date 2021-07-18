import Redis from '@ioc:Adonis/Addons/Redis'

Redis.psubscribe('user:*', (event: string, user: string) => {
  console.log(event, JSON.stringify(user))
})
