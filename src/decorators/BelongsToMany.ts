import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function BelongsToMany (
  related: FunctorOrValue<typeof Model | string>,
  pivot: FunctorOrValue<typeof Model | string>,
  foreignPivotKey: FunctorOrValue<string>, relatedPivotKey: FunctorOrValue<string>,
  parentKey?: FunctorOrValue<string>, relatedKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.belongsToMany as any)(...[related, pivot, foreignPivotKey, relatedPivotKey, parentKey, relatedKey].map(unwrapFunctorOrValue)))
}

export default BelongsToMany
