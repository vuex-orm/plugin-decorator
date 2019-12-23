import { Model } from '@vuex-orm/core'
import { Str, DecoratedModel } from '@/decorators'

describe('primitive', () => {
  it('throws if default value is `null` without `nullable` option is set to `true`', function () {
    expect(() => {
      @DecoratedModel('users')
      class User extends Model {
        @Str(null)
        name!: string
      }

      console.log(User)
    }).toThrow()
  })
})
