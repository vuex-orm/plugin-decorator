import { DecoratedModel, HasMany, Num, PrimaryKey, Str } from '@/decorators'
import { Model } from '@vuex-orm/core'
import * as Entities from './'

@DecoratedModel('A')
export class EntityA extends Model {
  @PrimaryKey()
  @Num(0)
  public id!: number

  @Str('foo', { nullable: false })
  public foo!: string

  @HasMany(() => Entities.EntityB, 'id')
  public manyB!: Entities.EntityB[]
}
