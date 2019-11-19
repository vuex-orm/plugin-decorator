import { Model, Boolean } from '@vuex-orm/core'
import Bool from '@/decorators/Bool'

describe('Bool', () => {
  it('can define `bool` field', () => {
    class User extends Model {
      @Bool()
      active!: boolean
    }

    expect(User.getFields().active).toBeInstanceOf(Boolean)
    expect((new User()).active).toBe(null)
  })

  it('can define `bool` field with default value', () => {
    class User extends Model {
      @Bool(true)
      active!: boolean
    }

    expect(User.getFields().active).toBeInstanceOf(Boolean)
    expect((new User()).active).toBe(true)
  })
})
