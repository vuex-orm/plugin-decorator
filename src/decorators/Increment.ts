import PropertyDecorator from '../contracts/PropertyDecorator'
import Field from './Field'

export function Increment (): PropertyDecorator {
  return Field(model => model.increment())
}

export default Increment
