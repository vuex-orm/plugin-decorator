import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Primitive from './Primitive'

/**
 * Create a str decorator.
 */
export function Str (value?: FunctorOrValue<string>, options?: TypeOptions): PropertyDecorator {
  return Primitive(model => model.string(unwrapFunctorOrValue(value)), options)
}

export default Str
