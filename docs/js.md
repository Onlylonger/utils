# JS

## clsx

参考 [clsx](https://github.com/lukeed/clsx) 库实现。常用于 **React** 动态计算样式类名。

#### 使用

```jsx
import { clsx } from '@shilong/utils'

function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <p className={clsx(isActive && 'underline')}>Test Underline</p>
      <button onClick={() => setIsActive(!isActive)}>Toggle</button>
    </div>
  )
}
```

## createEventEmitter

参考 [mitt](https://github.com/developit/mitt) 库实现。用于事件发布订阅通信，例如 **vue** 中 `emit` 触发某些事件。

### 使用

```jsx
import { createEventEmitter } from '@shilong/utils'
import { useEffect } from 'react'

const emit = createEventEmitter()

function App() {
  useEffect(() => {
    const handler = () => {
      console.log('init loaded')
    }
    emit.on('load', handler)

    return () => {
      emit.off('load', handler)
    }
  }, [])

  return <div>Hi</div>
}

document.getElementById('btn').addEventListener('click', () => {
  emit.emit('load')
})
```

## cva

目前使用 [cva](https://github.com/joe-bell/cva)。常用于通过 `props` 直接获取对应的 类名。

### 使用

```tsx
import { cva, type VariantProps } from '@shilong/utils'

const getBtnClx = cva({
  base: 'cursor-pointer rounded-md px-2 py-1 hover:bg-gray-200 border border-black disabled:opacity-40',
  variants: {
    variant: {
      default: '',
      secondary: '',
      outline: '',
      ghost: '',
      link: '',
    },
    size: {
      default: '',
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
  // defaultVariants?: ConfigVariants<T>;
})

export type ButtonVariants = VariantProps<typeof getBtnClx>
export type ButtonProps = ButtonVariants & React.ComponentProps<'button'>

export const Button = (props: ButtonProps) => {
  const { className, variant, size, ...reset } = props

  return (
    <button {...reset} className={getBtnClx({ variant, size, className })} />
  )
}
```

## merge

简单合并嵌套对象，对于非字面量对象例如数组等其它类型，则直接替换。常用于合并参数。

##

```js
import { merge } from '@shilong/utils'

fetch(
  'www.demo.com/api/login',
  merge(
    {},
    {
      headers: {
        custom: 'foo',
        d: [1, 2, 3],
      },
    },
    {
      method: 'get',
      headers: {
        Authorization: `Bearer bar`,
        d: [1, 1],
      },
    }
  )
)
```

## throttle,debounce

目前使用 [lodash-es](https://www.npmjs.com/package/lodash-es)。

<!-- ### 使用 -->

## isEqual

目前使用 [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)。常用于检测依赖变化。

<!-- ### 使用 -->

WIP...
