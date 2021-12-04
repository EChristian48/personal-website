import { FC, HTMLProps } from 'react'

const Container: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`
      container
      mx-auto
      py-8
      px-4
      sm:px-10
      md:px-18
      lg:px-52
      xl:px-84
      ${className}`}
      {...rest}>
      {children}
    </div>
  )
}

export default Container
