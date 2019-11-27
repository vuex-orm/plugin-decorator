import PropertyDecorator from '@/contracts/PropertyDecorator'
import { Model } from '@vuex-orm/core'

export function PrimaryKey (): PropertyDecorator {
  return (target: Model, propertyKey: string): void => {
    const model = target.constructor as typeof Model

    model.primaryKey = propertyKey
  }
}

export default PrimaryKey
