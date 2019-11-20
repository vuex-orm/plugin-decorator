import { Model, Attribute } from '@vuex-orm/core'
import PropertyDecorator from '../contracts/PropertyDecorator'

type Callback = (model: typeof Model) => Attribute

/**
 * Create a generic field decorator.
 */
export default function Field (callback: Callback): PropertyDecorator {
  return (target: Model, propertyKey: string): void => {
    const model = target.constructor as typeof Model

    if (!model.cachedFields) {
      model.cachedFields = {}
    }

    if (!model.cachedFields[model.entity]) {
      model.cachedFields[model.entity] = {}
    }

    model.cachedFields[model.entity][propertyKey] = callback(model)
  }
}
