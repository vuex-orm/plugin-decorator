import { Model } from '@vuex-orm/core'
import Str from '@/decorators/Str'

describe('Primitive', () => {
  it('throws if default value is `null` without `nullable` option is set to `true`', () => {
    expect(() => {
      class User extends Model {
        @Str(null)
        name!: string
      }

      console.log(User)
    }).toThrow()
  })
})
