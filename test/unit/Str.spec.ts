import { Model, String } from '@vuex-orm/core'
import Str from '@/decorators/Str'

describe('Str', () => {
  it('can define `string` field', () => {
    class User extends Model {
      @Str('John Doe')
      name!: string

      @Str('john.doe@example.com')
      email!: string
    }

    expect(User.getFields().name).toBeInstanceOf(String)
    expect((new User()).name).toBe('John Doe')
    expect((new User()).email).toBe('john.doe@example.com')
  })

  it('can define `string` as nullable', () => {
    class User extends Model {
      @Str(null, { nullable: true })
      name!: string

      @Str(null, { nullable: true })
      email!: string
    }

    expect(User.getFields().name).toBeInstanceOf(String)
    expect((new User()).name).toBe(null)
    expect((new User()).email).toBe(null)
  })
})
