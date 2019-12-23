import PropertyDecorator from '../contracts/PropertyDecorator'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Field from './Field'

/**
 * Create a attribute decorator.
 */
export function Attribute (value: FunctorOrValue<any> = null): PropertyDecorator {
  return Field(model => model.attr(unwrapFunctorOrValue(value)))
}

export default Attribute
