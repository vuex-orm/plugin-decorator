import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function HasOne (
  related: FunctorOrValue<typeof Model | string>, foreignKey: FunctorOrValue<string>,
  localKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.hasOne as any)(...[related, foreignKey, localKey].map(unwrapFunctorOrValue)))
}

export default HasOne
