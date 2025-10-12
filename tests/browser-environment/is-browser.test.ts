import { expect, test } from 'vitest'
import { isBrowser } from '../../src/browser/is-browser'

test('should isBrowser() be true', async () => {
  expect(isBrowser()).toBe(true)
})
