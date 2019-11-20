import { Model } from '@vuex-orm/core'

type PropertyDecorator = (target: Model, propertyKey: string) => void

export default PropertyDecorator
