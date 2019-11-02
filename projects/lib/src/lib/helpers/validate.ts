import { isNull } from './object'

export function nullCheck(obj: any, msg: string) {
  if (isNull(obj)) {
    throw new Error(msg)
  }
}
