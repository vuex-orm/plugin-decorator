import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function HasMany (
  related: FunctorOrValue<typeof Model | string>, foreignKey: FunctorOrValue<string>,
  localKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.hasMany as any)(...[related, foreignKey, localKey].map(unwrapFunctorOrValue)))
}

export default HasMany
