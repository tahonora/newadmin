import { useCallback, useRef } from 'react'

export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const isFirstTime = useRef(notDelayInFirstTime) 
  const debbouncing = useRef<NodeJS.Timeout>()

  const debounce = useCallback((func: () => void) => {
    if(isFirstTime.current) {
      isFirstTime.current = false
      func()
    } else {
      if(debbouncing.current) {
        clearTimeout(debbouncing.current)
      }
      debbouncing.current = setTimeout(() => { func() }, delay)  
    } 
  }, [delay])
  return {debounce}
}