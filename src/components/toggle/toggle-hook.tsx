import { useState, useCallback } from 'react'

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [toggleValue, setToggleValue] = useState(initialValue)
  const toggler = useCallback(() => setToggleValue(!toggleValue), [toggleValue])

  return [toggleValue, toggler]
}
