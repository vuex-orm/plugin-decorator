import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function BelongsTo (
  parent: FunctorOrValue<typeof Model | string>,
  foreignKey: FunctorOrValue<string>, ownerKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.belongsTo as any)(...[parent, foreignKey, ownerKey].map(unwrapFunctorOrValue)))
}

export default BelongsTo
