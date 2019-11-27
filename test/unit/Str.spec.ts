import { DecoratedModel, Str } from '@/decorators'
import { Model, String } from '@vuex-orm/core'
import { suite, test } from '@testdeck/jest'

@suite
export class StrSpec {
  @test
  'can define `string` field' () {
    @DecoratedModel('users')
    class User extends Model {
      @Str('John Doe')
      name!: string

      @Str('john.doe@example.com')
      email!: string
    }

    expect(User.getFields().name).toBeInstanceOf(String)
    expect((new User()).name).toBe('John Doe')
    expect((new User()).email).toBe('john.doe@example.com')
  }

  @test
  'can define `string` as nullable' () {
    @DecoratedModel('users')
    class User extends Model {
      @Str(null, { nullable: true })
      name?: string

      @Str(null, { nullable: true })
      email?: string
    }

    expect(User.getFields().name).toBeInstanceOf(String)
    expect((new User()).name).toBe(null)
    expect((new User()).email).toBe(null)
  }
}
