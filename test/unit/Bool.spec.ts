import { Model, Boolean } from '@vuex-orm/core'
import { DecoratedModel, Bool } from '@/decorators'
import { suite, test } from '@testdeck/jest'

@suite
export class BoolSpec {
  @test
  'can define `bool` field' () {
    @DecoratedModel('users')
    class User extends Model {
      @Bool(true)
      active!: boolean
    }

    expect(User.getFields().active).toBeInstanceOf(Boolean)
    expect((new User()).active).toBe(true)
  }

  @test
  'can define `bool` field as nullable' () {
    @DecoratedModel('users')
    class User extends Model {
      @Bool(null, { nullable: true })
      active?: boolean
    }

    expect(User.getFields().active).toBeInstanceOf(Boolean)
    expect((new User()).active).toBe(null)
  }
}
