import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Primitive from './Primitive'

/**
 * Create a bool decorator.
 */
export function Bool (value?: FunctorOrValue<boolean>, options?: TypeOptions): PropertyDecorator {
  return Primitive(model => model.boolean(unwrapFunctorOrValue(value)), options)
}

export default Bool
