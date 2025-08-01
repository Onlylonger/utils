type EventName = string | symbol
type DefaultObject = Record<EventName, (...reset: any[]) => void>

export type GenEventsFn<T extends DefaultObject> = Map<keyof T, T[keyof T][]>

export type EventEmitterInstance<T extends DefaultObject> = {
  eventsFn: Map<keyof T, T[keyof T][]>
  on: <Key extends keyof T>(name: Key, handler: T[Key]) => void
  emit: <Key extends keyof T>(name: Key, ...params: Parameters<T[Key]>) => void
  off: <Key extends keyof T>(name: Key, handler?: T[Key]) => void
}

export function createEventEmitter<EventsFn extends DefaultObject>(
  initValue?: GenEventsFn<EventsFn>
): EventEmitterInstance<EventsFn> {
  const eventsFn = initValue || (new Map() as GenEventsFn<EventsFn>)

  return {
    eventsFn,
    on(name, handler) {
      const handlers = eventsFn.get(name)
      if (handlers) {
        handlers.push(handler)
      } else {
        eventsFn.set(name, [handler])
      }
    },
    off(name, handler) {
      const handlers = eventsFn.get(name)
      if (handlers) {
        if (handler) {
          const index = handlers.indexOf(handler)
          if (index > -1) {
            handlers.splice(index, 1)
          }
        } else {
          eventsFn.set(name, [])
        }
      }
    },
    emit(name, ...params) {
      const handlers = eventsFn.get(name)
      if (handlers) {
        handlers.forEach((handler) => {
          handler(...params)
        })
      }
    },
  }
}
