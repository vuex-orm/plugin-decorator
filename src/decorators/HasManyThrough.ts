import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function HasManyThrough (
  related: FunctorOrValue<typeof Model | string>,
  through: FunctorOrValue<typeof Model | string>,
  firstKey: FunctorOrValue<string>, secondKey: FunctorOrValue<string>,
  localKey?: FunctorOrValue<string>, secondLocalKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.hasManyThrough as any)(...[related, through, firstKey, secondKey, localKey, secondLocalKey].map(unwrapFunctorOrValue)))
}

export default HasManyThrough
