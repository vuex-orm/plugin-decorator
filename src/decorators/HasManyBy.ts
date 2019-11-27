import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function HasManyBy (
  parent: FunctorOrValue<typeof Model | string>, foreignKey: FunctorOrValue<string>,
  ownerKey?: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.hasManyBy as any)(...[parent, foreignKey, ownerKey].map(unwrapFunctorOrValue)))
}

export default HasManyBy
