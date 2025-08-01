import { beforeEach, describe, expect, test, vi } from 'vitest'
import {
  createEventEmitter,
  EventEmitterInstance,
  GenEventsFn,
} from '../src/js/create-event-emitter'

describe('test createEventEmitter function', () => {
  test('should createEventEmitter be a function', () => {
    expect(createEventEmitter).to.be.a('function')
  })

  test('should accept an optional event handler map', () => {
    expect(() => createEventEmitter(new Map())).not.to.throw
    const map = new Map()
    const a = vi.fn(() => {})
    const b = vi.fn(() => {})
    map.set('foo', [a, b])
    const events = createEventEmitter<{ foo: () => void }>(map)
    events.emit('foo')
    expect(a).to.have.been.toHaveBeenCalledOnce
    expect(b).to.have.been.toHaveBeenCalledOnce
  })

  describe('', () => {
    const eventType = Symbol('eventType')
    type Events = {
      foo: () => void
      constructor: () => void
      FOO: () => void
      bar: () => void
      Bar: () => void
      'baz:bat!': () => void
      'baz:baT!': () => void
      Foo: () => void
      [eventType]: () => void
    }
    let events: GenEventsFn<Events>, inst: EventEmitterInstance<Events>

    beforeEach(() => {
      events = new Map()
      inst = createEventEmitter(events)
    })

    describe('properties', () => {
      test('should expose the event handler map', () => {
        expect(inst).to.have.property('eventsFn').that.is.a('map')
      })
    })

    describe('on()', () => {
      test('should be a function', () => {
        expect(inst).to.have.property('on').that.is.a('function')
      })

      test('should register handler for new type', () => {
        const foo = () => {}
        inst.on('foo', foo)

        expect(events.get('foo')).to.deep.equal([foo])
      })

      test('should register handlers for any type strings', () => {
        const foo = () => {}
        inst.on('constructor', foo)

        expect(events.get('constructor')).to.deep.equal([foo])
      })

      test('should append handler for existing type', () => {
        const foo = () => {}
        const bar = () => {}
        inst.on('foo', foo)
        inst.on('foo', bar)

        expect(events.get('foo')).to.deep.equal([foo, bar])
      })

      test('should NOT normalize case', () => {
        const foo = () => {}
        inst.on('FOO', foo)
        inst.on('Bar', foo)
        inst.on('baz:baT!', foo)

        expect(events.get('FOO')).to.deep.equal([foo])
        expect(events.has('foo')).to.equal(false)
        expect(events.get('Bar')).to.deep.equal([foo])
        expect(events.has('bar')).to.equal(false)
        expect(events.get('baz:baT!')).to.deep.equal([foo])
      })

      test('can take symbols for event types', () => {
        const foo = () => {}
        inst.on(eventType, foo)
        expect(events.get(eventType)).to.deep.equal([foo])
      })

      // Adding the same listener multiple times should register it multiple times.
      // See https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
      test('should add duplicate listeners', () => {
        const foo = () => {}
        inst.on('foo', foo)
        inst.on('foo', foo)
        expect(events.get('foo')).to.deep.equal([foo, foo])
      })
    })

    describe('off()', () => {
      test('should be a function', () => {
        expect(inst).to.have.property('off').that.is.a('function')
      })

      test('should remove handler for type', () => {
        const foo = () => {}
        inst.on('foo', foo)
        inst.off('foo', foo)

        expect(events.get('foo')).to.be.empty
      })

      test('should NOT normalize case', () => {
        const foo = () => {}
        inst.on('FOO', foo)
        inst.on('Bar', foo)
        inst.on('baz:bat!', foo)

        inst.off('FOO', foo)
        inst.off('Bar', foo)
        inst.off('baz:baT!', foo)

        expect(events.get('FOO')).to.be.empty
        expect(events.has('foo')).to.equal(false)
        expect(events.get('Bar')).to.be.empty
        expect(events.has('bar')).to.equal(false)
        expect(events.get('baz:bat!')).to.have.lengthOf(1)
      })

      test('should remove only the first matching listener', () => {
        const foo = () => {}
        inst.on('foo', foo)
        inst.on('foo', foo)
        inst.off('foo', foo)
        expect(events.get('foo')).to.deep.equal([foo])
        inst.off('foo', foo)
        expect(events.get('foo')).to.deep.equal([])
      })

      test('off("type") should remove all handlers of the given type', () => {
        inst.on('foo', () => {})
        inst.on('foo', () => {})
        inst.on('bar', () => {})
        inst.off('foo')
        expect(events.get('foo')).to.deep.equal([])
        expect(events.get('bar')).to.have.length(1)
        inst.off('bar')
        expect(events.get('bar')).to.deep.equal([])
      })
    })

    describe('emit()', () => {
      test('should be a function', () => {
        expect(inst).to.have.property('emit').that.is.a('function')
      })

      test('should invoke handler for type', () => {
        const event = { a: 'b' }

        // @ts-ignore
        inst.on('foo', (one, two?: unknown) => {
          expect(one).to.deep.equal(event)
          expect(two).to.be.an('undefined')
        })

        // @ts-ignore
        inst.emit('foo', event)
      })

      test('should NOT ignore case', () => {
        const onFoo = vi.fn(),
          onFOO = vi.fn()
        events.set('Foo', [onFoo])
        events.set('FOO', [onFOO])

        // @ts-ignore
        inst.emit('Foo', 'Foo arg')
        // @ts-ignore
        inst.emit('FOO', 'FOO arg')

        expect(onFoo).to.have.been.toHaveBeenCalledOnce()
        expect(onFoo).to.have.been.toHaveBeenCalledWith('Foo arg')
        expect(onFoo).to.have.been.toHaveBeenCalledOnce()
        expect(onFoo).to.have.been.toHaveBeenCalledWith('Foo arg')
      })
    })
  })
})
