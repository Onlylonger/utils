import { expect, test } from 'vitest'
import { isBrowser } from '../../src/browser/is-browser'

test('should isBrowser() be false', async () => {
  expect(isBrowser()).toBe(false)
})
