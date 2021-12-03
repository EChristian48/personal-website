import { Icon } from '@iconify/react'
import Link from 'next/link'
import { FC } from 'react'
import { Project } from '~/types'

const ProjectCard: FC<Project> = ({ link, name, thumbnail, description }) => {
  return (
    <Link href={link}>
      <a className="flex gap-2 items-center transition-colors hover:bg-light-500 dark:hover:bg-dark-500 p-3">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={name}
            className="w-[60px] h-[60px] object-contain object-center flex-shrink-0"
          />
        ) : (
          <Icon
            className="flex-shrink-0"
            icon="carbon:application"
            height={60}
            width={60}
          />
        )}

        <div>
          <div className="text-lg font-bold">{name}</div>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
