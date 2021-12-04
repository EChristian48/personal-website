import { Icon } from '@iconify/react'
import { HTMLProps } from 'react'

interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
  icon: string
  label: string
}

export default function IconButton({
  icon,
  className,
  label,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`
      p-2
      transition-colors
      leading-0
      focus:outline-none
      outline-none
      rounded-full
      hover:bg-light-900
      dark:hover:bg-dark-50
      ${className}`}
      {...rest}
      type="button"
      aria-label={label}
      title={label}>
      <Icon icon={icon} height={28} width={28} />
    </button>
  )
}
