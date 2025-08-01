import { isBrowser } from './is-browser'

export const copyToClipboard = async (text: string, isRichText = false) => {
  if (!isBrowser()) {
    throw new Error('copyToClipboard only work in browser environment')
  }

  try {
    if (isRichText) {
      const blob = new Blob([text], { type: 'text/html' })
      const data = [
        new ClipboardItem({
          'text/html': blob,
          'text/plain': new Blob([text], { type: 'text/plain' }),
        }),
      ]
      await navigator.clipboard.write(data)
    } else {
      await navigator.clipboard.writeText(text)
    }
    return true
  } catch (err) {
    console.error('复制失败:', err)
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      const successful = document.execCommand('copy')
      document.body.removeChild(textarea)
      return successful
    } catch (err) {
      document.body.removeChild(textarea)
      return false
    }
  }
}
