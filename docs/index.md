# Getting Started

## 安装

目前只支持 ES 模块

```sh
npm install @shilong/utils --save
# pnpm add @shilong/utils -S
```

### 使用

```js
import { isBrowser } from '@shilong/utils'

if (isBrowser()) {
  console.log('Browser environment')
  document.getElementById('root')
}
```

WIP...
