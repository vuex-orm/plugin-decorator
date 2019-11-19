import { Model } from '@vuex-orm/core'
import { setAttributeToFields } from '../support/Utils'

/**
 * Create a str decorator.
 */
export default function Str (value: string | null = null): (target: Model, propertyKey: string) => void {
  return (target: Model, propertyKey: string): void => {
    const model = target.constructor as typeof Model

    setAttributeToFields(model, propertyKey, model.string(value))
  }
}
