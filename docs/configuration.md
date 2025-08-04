# Configuration

## HTTP STATUS

参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) 进行一些常用的 **http status** 状态码以及描述信息的抽离

### 使用

```js
import { httpStatus, type HttpStatusCode } from '@shilong/utils'

console.log(httpStatus[500].msg) // -> Internal Server Error

/**
 * {
    msg: 'Internal Server Error',
  }
*/
console.log(httpStatus[500])
```

一般用在封装 **api** 的场景中，例如

```js
export const request = (input, init) => {
  return fetch(input, init).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res
    } else {
      throw new Error(
        // 此处使用
        res.statusText ? res.statusText : httpStatus[res.status].msg
      )
    }
  })
}
```

WIP...
