import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import Primitive from './Primitive'

/**
 * Create a str decorator.
 */
export default function Str (value: string | null, options?: TypeOptions): PropertyDecorator {
  return Primitive(model => model.string(value), options)
}
