import { Model } from '@vuex-orm/core'
import InheritanceTypes from '@vuex-orm/core/lib/model/contracts/InheritanceTypes'

// Creates an optional class decorator to be used as means to add static fields
export function DecoratedModel (
  entityName: string,
  options?: {
    parentEntity?: string,
    types?: InheritanceTypes,
    typeKey?: string
  }
): (target: any) => any | void {
  return (target: any): any | void => {
    const model = target.constructor as typeof Model

    // Do this temporarily until upstream vuex-orm declare this field officially
    // I want to use this to notify hot reloader in the future
    ;(model as any).isDecorated = true

    model.entity = entityName

    // generate base entity key assignment
    if (options?.parentEntity) {
      model.baseEntity = options.parentEntity
    }

    // generate type discriminator
    if (options?.types) {
      model.types = () => options.types!

      // assignment type key for this entity
      if (options?.typeKey) {
        model.typeKey = options.typeKey
      }
    }

    return target
  }
}

export default DecoratedModel
