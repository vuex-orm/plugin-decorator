import { Model, Type } from '@vuex-orm/core'
import PropertyDecorator from '../contracts/PropertyDecorator'
import { TypeOptions } from '../options/Options'
import Field from './Field'

type Callback = (model: typeof Model) => Type

/**
 * Create a generic type decorator.
 */
export default function Primitive (callback: Callback, options?: TypeOptions): PropertyDecorator {
  return Field((model) => {
    const type = callback(model)

    if (type.value === null && !options?.nullable) {
      throw new Error(
        "[Vuex ORM] You've defined the default value of a field as `null` " +
        'without enabling `nullable` option. If you want the field to accept' +
        '`null`, set `nullable` option to `true`.'
      )
    }

    options?.nullable && type.nullable()

    return type
  })
}
