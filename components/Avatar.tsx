import { HTMLProps } from 'react'

export interface AvatarProps extends HTMLProps<HTMLImageElement> {}

export default function Avatar({ className, ...rest }: AvatarProps) {
  return (
    <img
      className={`rounded-full h-12 w-12 object-center object-cover ${className}`}
      {...rest}
    />
  )
}
