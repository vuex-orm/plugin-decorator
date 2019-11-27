import { Model } from '@vuex-orm/core'
import { Str, DecoratedModel } from '@/decorators'
import { suite, test } from '@testdeck/jest'

@suite
export class PrimitiveSpec {
  @test
  'throws if default value is `null` without `nullable` option is set to `true`' () {
    expect(() => {
      @DecoratedModel('users')
      class User extends Model {
        @Str(null)
        name!: string
      }

      console.log(User)
    }).toThrow()
  }
}
