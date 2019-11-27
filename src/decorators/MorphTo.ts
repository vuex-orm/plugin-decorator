import PropertyDecorator from '@/contracts/PropertyDecorator'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

export function MorphTo (
  id: FunctorOrValue<string>, type: FunctorOrValue<string>
): PropertyDecorator {
  return Field(model => (model.morphTo as any)(...[id, type].map(unwrapFunctorOrValue)))
}

export default MorphTo
