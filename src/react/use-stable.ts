import { useRef } from 'react'

export const useStableFn = <T>(unstableFn: T) => {
  const stableFnRef = useRef(unstableFn)
  stableFnRef.current = unstableFn

  return stableFnRef
}
