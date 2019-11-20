import { Model, Number } from '@vuex-orm/core'
import Num from '@/decorators/Num'

describe('Num', () => {
  it('can define `number` field', () => {
    class User extends Model {
      @Num(34)
      age!: number
    }

    expect(User.getFields().age).toBeInstanceOf(Number)
    expect((new User()).age).toBe(34)
  })

  it('can define `number` as nullable', () => {
    class User extends Model {
      @Num(null, { nullable: true })
      age!: number
    }

    expect(User.getFields().age).toBeInstanceOf(Number)
    expect((new User()).age).toBe(null)
  })
})
