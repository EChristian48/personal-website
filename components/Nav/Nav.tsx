import { useDark } from '~/helper/hooks'
import { NavIcon } from '.'
import { IconButton, Logo } from '..'

export default function Nav() {
  const [isDark, setDark] = useDark()

  return (
    <nav className="flex gap-1 sm:gap-2 md:gap-3 p-2 md:p-3 justify-end items-center">
      <Logo className="mr-auto" />

      <NavIcon href={{ pathname: '/blogs' }} icon="carbon:blog" label="Blogs" />
      <NavIcon
        href={{ pathname: '/projects' }}
        icon="carbon:application"
        label="Projects"
      />
      <NavIcon href={{ pathname: '/notes' }} icon="carbon:pen" label="Notes" />
      <NavIcon
        href="https://github.com/EChristian48"
        icon="carbon:logo-github"
        label="Github"
      />

      <IconButton
        icon={isDark ? 'carbon:moon' : 'carbon:sun'}
        onClick={() => setDark((prev) => !prev)}
        label="Toggle dark mode"
      />
    </nav>
  )
}
