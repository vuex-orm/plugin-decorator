import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import { FunctorOrValue, unwrapFunctorOrValue } from '../utils'
import Primitive from './Primitive'

/**
 * Create a num decorator.
 */
export function Num (value?: FunctorOrValue<number>, options?: TypeOptions): PropertyDecorator {
  return Primitive(model => model.number(unwrapFunctorOrValue(value)), options)
}

export default Num
