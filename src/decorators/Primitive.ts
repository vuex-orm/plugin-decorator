import { Model, Type } from '@vuex-orm/core'
import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import Field from './Field'

type Callback = (model: typeof Model) => Type

/**
 * Create a generic type decorator.
 */
export function Primitive (callback: Callback, options?: TypeOptions): PropertyDecorator {
  return Field((model, propertyKey) => {
    const type = callback(model)

    if (
      typeof type?.value !== 'number' // if that number is 0, what will happen?! always remember it was coerced to false
      && !(type?.value || options?.nullable)
    ) {
      throw new Error(`
[Vuex ORM] You've defined the default value of a field as \`null\` without enabling \`nullable\` option.
If you want the field to accept\`null\`, set \`nullable\` option to \`true\`.
Problematic class name: ${model.name}; Related property key: ${propertyKey}
      `)
    }

    if (options?.nullable) {
      type.nullable()
    }

    return type
  })
}

export default Primitive
