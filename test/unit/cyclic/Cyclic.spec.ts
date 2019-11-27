import { suite, test } from '@testdeck/jest'
import { BelongsTo, HasMany } from '@vuex-orm/core'
import { EntityA, EntityB, EntityC } from './fixtures'

@suite
export class CyclicSpec {
  @test
  'should run perfectly' () {
    expect(EntityA.getFields().manyB).toBeInstanceOf(HasMany)
    expect(EntityB.getFields().oneA).toBeInstanceOf(BelongsTo)
    expect(EntityB.getFields().cS).toBeInstanceOf(HasMany)
    expect(EntityC.getFields().bS).toBeInstanceOf(HasMany)
  }
}
