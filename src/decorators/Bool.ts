import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import Primitive from './Primitive'

/**
 * Create a bool decorator.
 */
export default function Bool (value: boolean | null, options?: TypeOptions): PropertyDecorator {
  return Primitive(model => model.boolean(value), options)
}
