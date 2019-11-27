import { Model, Number } from '@vuex-orm/core'
import { Num, DecoratedModel } from '@/decorators'
import { suite, test } from '@testdeck/jest'

@suite
export class NumSpec {
  @test
  'can define `number` field' () {
    @DecoratedModel('users')
    class User extends Model {
      @Num(34)
      age!: number
    }

    expect(User.getFields().age).toBeInstanceOf(Number)
    expect((new User()).age).toBe(34)
  }

  @test
  'can define `number` as nullable' () {
    @DecoratedModel('users')
    class User extends Model {
      @Num(null, { nullable: true })
      age?: number
    }

    expect(User.getFields().age).toBeInstanceOf(Number)
    expect((new User()).age).toBe(null)
  }
}
