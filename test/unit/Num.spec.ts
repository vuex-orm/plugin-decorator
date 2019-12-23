import { Model, Number } from '@vuex-orm/core'
import { Num, DecoratedModel } from '@/decorators'

describe('number', () => {
  it('can define `number` field', function () {
    @DecoratedModel('users')
    class User extends Model {
      @Num(34)
      age!: number
    }

    expect(User.getFields().age).toBeInstanceOf(Number)
    expect((new User()).age).toBe(34)
  })

  it('can define `number` as nullable', function () {
    @DecoratedModel('users')
    class User extends Model {
      @Num(null, { nullable: true })
      age?: number
    }

    expect(User.getFields().age).toBeInstanceOf(Number)
    expect((new User()).age).toBe(null)
  })
})
