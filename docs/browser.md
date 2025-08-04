# Browser

## isBrowser

用于判断当前环境是否支持浏览器运行环境

### 使用方式

```js
import { isBrowser } from '@shilong/utils'

if (isBrowser()) {
  console.log('Browser environment')
  document.getElementById('root')
}
```

## copyToClipboard

用于动态使用 js 将内容拷贝到设备粘贴板中，方便用户拷贝内容（可以理解为 **选中 + Ctrl/Cmd + C**）

### 使用方式

```js
import { copyToClipboard } from '@shilong/utils'

const ele = document.getElementById('root')
ele.addEventListener('click', async () => {
  const url = ele.getAttribute('data-url')
  if (!url) return
  const res = await copyToClipboard(url)
  res && console.log(`链接内容 ${url} 已复制到粘贴板`)
})
```

WIP...
