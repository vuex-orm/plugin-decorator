import { DecoratedModel, HasMany, Num, PrimaryKey, Str } from '@/decorators'
import { Model } from '@vuex-orm/core'
import * as Entities from './index'

@DecoratedModel('A')
export class EntityC extends Model {
  @PrimaryKey()
  @Num(0)
  public id!: number

  @Str('baz')
  public baz!: string

  @HasMany(() => Entities.EntityB, 'id', 'id')
  public bS!: Entities.EntityB[]
}
