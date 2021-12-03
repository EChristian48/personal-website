import Link from 'next/link'
import { FC } from 'react'
import { BlogPreview } from '~/types'

const ProjectCard: FC<BlogPreview> = ({ data: { date, title }, id }) => {
  return (
    <Link href={{ pathname: `/blogs/${id}` }}>
      <a className="block p-4 bg-light-400 dark:bg-dark-800 hover:bg-light-700 dark:hover:bg-dark-500 transition-colors">
        <article>
          <div className="text-xl">{title}</div>
          <div className="text-sm">{date}</div>
        </article>
      </a>
    </Link>
  )
}

export default ProjectCard
