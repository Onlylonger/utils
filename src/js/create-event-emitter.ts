export function createEventEmitter() {
  // const eventsMap = new Map()
  // const on = (name, handler) => {
  //   const handlers = eventsMap.get(name)
  //   if (handlers) {
  //     handlers.push(handler)
  //   } else {
  //     eventsMap.set(name, [handler])
  //   }
  // }
  // const off = (name, handler) => {
  //   const handlers = eventsMap.get(name)
  //   if (handlers) {
  //     if (handler) {
  //       const index = handlers.indexOf(handler)
  //       if (index > -1) {
  //         handlers.splice(index, 1)
  //       }
  //     } else {
  //       eventsMap.set(name, [])
  //     }
  //   }
  // }
  // const emit = (name, params) => {
  //   const handlers = eventsMap.get(name)
  //   if (handlers) {
  //     handlers.forEach((handler) => {
  //       handler(params)
  //     })
  //   }
  // }
  // return {
  //   eventsMap,
  //   on,
  //   off,
  //   emit,
  // }
}
