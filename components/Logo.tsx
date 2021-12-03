import Link from 'next/link'
import { HTMLProps } from 'react'
import { Avatar } from '.'

export interface LogoProps extends HTMLProps<HTMLAnchorElement> {}

export default function Logo({ ...rest }: LogoProps) {
  return (
    <Link href={{ pathname: '/' }} passHref>
      <a {...rest}>
        <Avatar
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.goombastomp.com%2Fwp-content%2Fuploads%2F2016%2F12%2FLink.png&f=1&nofb=1"
          alt="Bored Link"
          className="rounded-none"
        />
      </a>
    </Link>
  )
}
