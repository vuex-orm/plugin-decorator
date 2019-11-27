import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'

export function PrimaryKey (): PropertyDecorator {
  return (target: Model, propertyKey: string): void => {
    const model = target.constructor as typeof Model

    // making the primary key values an array
    // even if you have one and only one value there's no effect in functionality
    if (!model.primaryKey) {
      model.primaryKey = []
    } else if (typeof model.primaryKey === 'string') {
      const oldPrimaryKey = model.primaryKey
      model.primaryKey = [oldPrimaryKey]
    }

    model.primaryKey.push(propertyKey)
  }
}

export default PrimaryKey
