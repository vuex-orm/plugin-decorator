import PropertyDecorator from '../contracts/PropertyDecorator'
import Field from './Field'

/**
 * Create a attribute decorator.
 */
export default function Attribute (value: any = null): PropertyDecorator {
  return Field(model => model.attr(value))
}
