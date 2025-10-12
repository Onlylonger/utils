import { describe, expect, test } from 'vitest'
import { merge } from '../../src/js/merge'

describe('test merge function', () => {
  test('object recursion', () => {
    expect(
      merge(
        { a: 2 },
        {
          headers: {
            custom: 'foo',
            d: [1, 2, 3],
          },
        },
        {},
        {
          method: 'get',
          headers: {
            Authorization: `Bearer bar`,
            d: [1, 1],
          },
        }
      )
    ).toStrictEqual({
      a: 2,
      method: 'get',
      headers: {
        custom: 'foo',
        Authorization: `Bearer bar`,
        d: [1, 1],
      },
    })
  })

  test('replace array', () => {
    expect(
      merge({ a: 1, d: [3, 3, 4, 3] }, { d: [3, 4, 5], e: 4 })
    ).toStrictEqual({
      a: 1,
      d: [3, 4, 5],
      e: 4,
    })
  })
})
