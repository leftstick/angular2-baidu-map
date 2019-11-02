export function isNull(obj: any) {
  return obj === null || obj === undefined
}

export function isUndefined(obj: any) {
  return obj === undefined
}

export function isBoolean(obj: any): obj is boolean {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}

export function isFunction(obj: any): obj is boolean {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

export function isString(obj: any): obj is boolean {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isNumber(obj: any): obj is boolean {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export function omit<T>(obj: T, ...keys: Array<string>): T {
  const rawKeys = Object.keys(obj)
  const finalKeys = rawKeys.filter(k => keys.indexOf(k) < 0)
  return finalKeys.reduce(
    (p, v) => {
      p[v] = obj[v]
      return p
    },
    {} as T
  )
}
