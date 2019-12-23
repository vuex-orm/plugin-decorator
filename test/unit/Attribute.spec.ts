import { Model, Attr } from '@vuex-orm/core'
import { Attribute, DecoratedModel } from '@/decorators'

describe('attribute', () => {
  it('can define `attr` field', function () {
    @DecoratedModel('users')
    class User extends Model {
      @Attribute()
      id!: number
    }

    expect(User.getFields().id).toBeInstanceOf(Attr)
    expect((new User()).id).toBe(null)
  })
})
