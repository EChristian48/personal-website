import { Icon } from '@iconify/react'
import { HTMLProps } from 'react'
import Link, { LinkProps } from 'next/link'

interface NavIconProps extends LinkProps {
  icon: string
  label: string
}

export default function NavIcon({ icon, label, ...rest }: NavIconProps) {
  return (
    <Link {...rest}>
      <a
        className="
        p-2
        transition-colors
        leading-0
        focus:outline-none
        outline-none
        rounded-full
        hover:bg-light-900
        dark:hover:bg-dark-50
        "
        aria-label={label}
        title={label}>
        <Icon icon={icon} height={28} width={28} />
      </a>
    </Link>
  )
}
