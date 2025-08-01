export type ClsxItem =
  | string
  | number
  | Record<string, any>
  | boolean
  | null
  | undefined

function toVal(mix: ClsxItem) {
  let k,
    y,
    str = ''

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      var len = mix.length
      for (k = 0; k < len; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ')
            str += y
          }
        }
      }
    } else {
      for (y in mix) {
        if (mix?.[y]) {
          str && (str += ' ')
          str += y
        }
      }
    }
  }

  return str
}

export function clsx(...reset: ClsxItem[]) {
  let i = 0,
    tmp,
    x,
    str = '',
    len = reset.length
  for (; i < len; i++) {
    if ((tmp = reset[i])) {
      if ((x = toVal(tmp))) {
        str && (str += ' ')
        str += x
      }
    }
  }
  return str
}

// export function liteClsx() {
//   var i = 0,
//     tmp,
//     str = "",
//     len = arguments.length;
//   for (; i < len; i++) {
//     if ((tmp = arguments[i])) {
//       if (typeof tmp === "string") {
//         str += (str && " ") + tmp;
//       }
//     }
//   }
//   return str;
// }
