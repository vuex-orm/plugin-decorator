import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function MorphMany (
  related: FunctorOrValue<typeof Model | string>,
  id: FunctorOrValue<string>, type: FunctorOrValue<string>, localKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.morphMany as any)(...[related, id, type, localKey].map(unwrapFunctorOrValue)))
}

export default MorphMany
