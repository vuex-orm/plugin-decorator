import { Model, Boolean } from '@vuex-orm/core'
import { DecoratedModel, Bool } from '@/decorators'

describe('boolean', () => {
  it('can define `bool` field', function () {
    @DecoratedModel('users')
    class User extends Model {
      @Bool(true)
      active!: boolean
    }

    expect(User.getFields().active).toBeInstanceOf(Boolean)
    expect((new User()).active).toBe(true)
  })

  it('can define `bool` field as nullable', function () {
    @DecoratedModel('users')
    class User extends Model {
      @Bool(null, { nullable: true })
      active?: boolean
    }

    expect(User.getFields().active).toBeInstanceOf(Boolean)
    expect((new User()).active).toBe(null)
  })
})
