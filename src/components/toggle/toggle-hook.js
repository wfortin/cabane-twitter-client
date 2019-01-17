import { useState, useCallback } from 'react'

export function useToggle(initialValue) {
  const [toggleValue, setToggleValue] = useState(0)
  const toggler = useCallback(() => setToggleValue(!toggleValue))

  return [toggleValue, toggler]
}
