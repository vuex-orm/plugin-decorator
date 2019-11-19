import { Model, Attr } from '@vuex-orm/core'
import Attribute from '@/decorators/Attribute'

describe('Attribute', () => {
  it('can define `attr` field', () => {
    class User extends Model {
      @Attribute()
      id!: number
    }

    expect(User.getFields().id).toBeInstanceOf(Attr)
    expect((new User()).id).toBe(null)
  })

  it('can define `attr` field with default value', () => {
    class User extends Model {
      @Attribute(1)
      id!: number
    }

    expect(User.getFields().id).toBeInstanceOf(Attr)
    expect((new User()).id).toBe(1)
  })
})
