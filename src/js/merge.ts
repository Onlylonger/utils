export function merge<T extends Record<string, any>>(
  target: T,
  ...sources: T[]
) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        merge(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return merge(target, ...sources)
}

function isObject(item: undefined | null | object) {
  return item && typeof item === 'object' && !Array.isArray(item)
}
