import {useEffect, useRef} from "react"

export default function useDebounced(func: any, delay: number, cleanUp: boolean = false) {
  const timeoutRef = useRef()

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp])

  return (...args: any) => {
    clearTimer()
    // @ts-ignore
    timeoutRef.current = setTimeout(() => func(...args), delay)
  }
}
