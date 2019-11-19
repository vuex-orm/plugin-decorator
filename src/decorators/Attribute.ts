import { Model } from '@vuex-orm/core'
import { setAttributeToFields } from '../support/Utils'

/**
 * Create a attribute decorator.
 */
export default function Attribute (value: any = null): (target: Model, propertyKey: string) => void {
  return (target: Model, propertyKey: string): void => {
    const model = target.constructor as typeof Model

    setAttributeToFields(model, propertyKey, model.attr(value))
  }
}
