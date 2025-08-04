# React

## useCompareEffect

目前使用 [ahooks useDeepCompareEffect](https://github.com/alibaba/hooks)。

## usePrevious

目前使用 [ahooks usePrevious](https://github.com/alibaba/hooks)。

## useStableFn

主要用于存储 props 中参数是函数的类型。

### 使用

```ts
import { useState, useCallback } from 'react'
import type { CustomError } from './fetcher'
import { useCompareEffect, useStableFn } from '@shilong/utils'

export const useRequest = <TData, TParams extends unknown[]>(
  promiseFn: Service<TData, TParams>,
  options: {
    manual?: boolean
    params?: TParams
    onError?: (err: CustomError) => Error | CustomError
    onSuccess?: (res: CustomError) => void
  } = {}
) => {
  const {
    manual = true,
    params,
    onError = defaultHandleonError,
    onSuccess,
  } = options

  const staPromiseFn = useStableFn(promiseFn)
  const staOnErrorFn = useStableFn(onError)
  const staOnSuccessFn = useStableFn(onSuccess)

  const run = useCallback(
    (...args: TParams) => {
      setLoading(true)
      setError(null)

      const tmp = staPromiseFn.current(...args)

      const finalPromise = tmp.promise
        .then((res) => {
          setData(res)
          setLoading(false)
          staOnSuccessFn.current?.(res)
          return res
        })
        .catch((err) => {
          if (err.name === 'AbortError') return

          setLoading(false)
          setError(err)
          staOnErrorFn.current?.(err)
          throw err
        })

      return {
        promise: finalPromise,
        controller: tmp.controller,
      }
    },
    [staPromiseFn, staOnErrorFn, staOnSuccessFn]
  )

  // ....
}
```

WIP...
