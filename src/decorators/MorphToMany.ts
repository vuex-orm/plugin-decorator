import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function MorphToMany (
  related: FunctorOrValue<typeof Model | string>,
  pivot: FunctorOrValue<typeof Model | string>,
  relatedId: FunctorOrValue<string>, id: FunctorOrValue<string>, type: FunctorOrValue<string>,
  parentKey?: FunctorOrValue<string>, relatedKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.morphToMany as any)(...[related, pivot, relatedId, id, type, parentKey, relatedKey].map(unwrapFunctorOrValue)))
}

export default MorphToMany
