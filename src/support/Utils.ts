import { Model, Attribute } from '@vuex-orm/core'

/**
 * Set given attribute to the model field.
 */
export function setAttributeToFields (model: typeof Model, key: string, attr: Attribute): void {
  if (!model.cachedFields) {
    model.cachedFields = {}
  }

  if (!model.cachedFields[model.entity]) {
    model.cachedFields[model.entity] = {}
  }

  model.cachedFields[model.entity][key] = attr
}
