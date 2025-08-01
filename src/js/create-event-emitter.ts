type EventType = string | symbol

export function createEventEmitter<
  EventsFn extends Record<EventType, (...reset: any[]) => void>
>(initValue?: Map<keyof EventsFn, EventsFn[keyof EventsFn][]>) {
  type EventsKey = keyof EventsFn

  const eventsFn = initValue || new Map<EventsKey, EventsFn[EventsKey][]>()

  const on = <Key extends EventsKey>(name: Key, handler: EventsFn[Key]) => {
    const handlers = eventsFn.get(name)
    if (handlers) {
      handlers.push(handler)
    } else {
      eventsFn.set(name, [handler])
    }
  }

  const off = <Key extends EventsKey>(name: Key, handler?: EventsFn[Key]) => {
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
  }

  const emit = <Key extends EventsKey>(
    name: Key,
    ...params: Parameters<EventsFn[Key]>
  ) => {
    const handlers = eventsFn.get(name)
    if (handlers) {
      handlers.forEach((handler) => {
        handler(...params)
      })
    }
  }

  return {
    eventsFn,
    on,
    off,
    emit,
  }
}
