import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import Primitive from './Primitive'

/**
 * Create a num decorator.
 */
export default function Num (value: number | null, options?: TypeOptions): PropertyDecorator {
  return Primitive(model => model.number(value), options)
}
