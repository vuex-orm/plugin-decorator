import PropertyDecorator from '../contracts/PropertyDecorator'
import Field from './Field'

/**
 * Create a str decorator.
 */
export default function Str (value: string | null = null): PropertyDecorator {
  return Field(model => model.string(value))
}
