```js
class User extends BaseModel {
  @column()
  public id: number

  @hasMany(() => Post, {
    localKey: 'id', // id column on "User" model
  })
  public posts: HasMany<typeof Post>
}

class Post extends BaseModel {
  @belongsTo(() => User, {
    localKey: 'id', // id column on "User" model
  })
  public author: BelongsTo<typeof User>
}
```
