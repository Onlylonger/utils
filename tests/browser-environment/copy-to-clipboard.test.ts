import { expect, test } from 'vitest'
import { copyToClipboard } from '../../src/browser/copy-to-clipboard'
// TODO: 复制失败: [NotAllowedError: Failed to execute 'writeText' on 'Clipboard': Write permission denied.]

test.skip('should call copyToClipboard be true', async () => {
  let copyRes = false

  const btnEle = document.createElement('button')
  document.body.appendChild(btnEle)
  btnEle.focus()
  copyRes = await copyToClipboard('Hi')
  expect(copyRes).toBe(true)
})
