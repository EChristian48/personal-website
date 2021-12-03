import { useEffect, useState } from 'react'

export function useDark() {
  const storageValue =
    process.browser && localStorage.getItem('dark') === 'true'
  const [value, setValue] = useState(storageValue)

  useEffect(() => {
    console.log('useDark')
    localStorage.setItem('dark', value.toString())
    document.documentElement.classList.toggle('dark', value)
  }, [value])

  return [value, setValue] as const
}
