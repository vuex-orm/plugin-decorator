import PropertyDecorator from '../contracts/PropertyDecorator'
import Field from './Field'

/**
 * Create a bool decorator.
 */
export default function Bool (value: boolean | null = null): PropertyDecorator {
  return Field(model => model.boolean(value))
}
