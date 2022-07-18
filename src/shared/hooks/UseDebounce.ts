import { useCallback, useRef } from 'react'

export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const debbouncing = useRef<NodeJS.Timeout>()
  const isFirstTime = useRef(notDelayInFirstTime) 

  const debounce = useCallback((func: () => void) => {
    if(isFirstTime.current) {
      isFirstTime.current = false
      func()
    } else {
      if(debbouncing.current) {
        clearTimeout(debbouncing.current)
      }
      debbouncing.current = setTimeout(() => { func() }, 1000)  
    }
  }, [delay])
  return {debounce}
}