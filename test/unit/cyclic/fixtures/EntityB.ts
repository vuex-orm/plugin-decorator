import { BelongsTo, DecoratedModel, HasMany, Num, PrimaryKey, Str } from '@/decorators'
import { Model } from '@vuex-orm/core'
import * as Entities from './index'

@DecoratedModel('A')
export class EntityB extends Model {
  @PrimaryKey()
  @Num(0)
  public id!: number

  @Str(null, { nullable: true })
  public bar?: string

  @BelongsTo(() => Entities.EntityA, 'id')
  public oneA!: Entities.EntityA

  @HasMany(() => Entities.EntityC, 'id', 'id')
  public cS!: Entities.EntityC[]
}
