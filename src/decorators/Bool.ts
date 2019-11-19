import { Model } from '@vuex-orm/core'
import { setAttributeToFields } from '../support/Utils'

/**
 * Create a bool decorator.
 */
export default function Bool (value: boolean | null = null): (target: Model, propertyKey: string) => void {
  return (target: Model, propertyKey: string): void => {
    const model = target.constructor as typeof Model

    setAttributeToFields(model, propertyKey, model.boolean(value))
  }
}
