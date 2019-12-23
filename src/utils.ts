export type FunctorOrValue<T> = (() => T) | T

export const unwrapFunctorOrValue = <T> (functorOrValue: FunctorOrValue<T>): T =>
  ((functorOrValue instanceof Function && functorOrValue()) || functorOrValue) as T
