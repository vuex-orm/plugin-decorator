import { Model, Attr } from '@vuex-orm/core'
import { Attribute, DecoratedModel } from '@/decorators'
import { suite, test } from '@testdeck/jest'

@suite
export class AttributeSpec {
  @test
  'can define `attr` field' () {
    @DecoratedModel('users')
    class User extends Model {
      @Attribute()
      id!: number
    }

    expect(User.getFields().id).toBeInstanceOf(Attr)
    expect((new User()).id).toBe(null)
  }

  @test
  'can define `attr` field with default value' () {
    @DecoratedModel('users')
    class User extends Model {
      @Attribute(1)
      id!: number
    }

    expect(User.getFields().id).toBeInstanceOf(Attr)
    expect((new User()).id).toBe(1)
  }
}
