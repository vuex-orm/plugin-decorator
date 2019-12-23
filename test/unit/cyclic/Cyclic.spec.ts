import { BelongsTo, HasMany } from '@vuex-orm/core'
import { EntityA, EntityB, EntityC } from './fixtures'

describe('cyclic', function () {
  it('should run perfectly', function () {
    expect(EntityA.getFields().manyB).toBeInstanceOf(HasMany)
    expect(EntityB.getFields().oneA).toBeInstanceOf(BelongsTo)
    expect(EntityB.getFields().cS).toBeInstanceOf(HasMany)
    expect(EntityC.getFields().bS).toBeInstanceOf(HasMany)
  })
})
