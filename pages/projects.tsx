import { Icon } from '@iconify/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { projects } from '~/contents/projects'

const ProjectsPage: NextPage = () => {
  return (
    <main className="space-y-6">
      <h1>Projects</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        commodi possimus sit rem iure, tenetur deleniti, ad mollitia laudantium
        non atque ipsam quod, cum distinctio aliquid totam. Itaque, quo culpa!
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repellat
        hic saepe asperiores rerum aliquid molestias accusantium distinctio nemo
        minima ipsum illo, architecto ab maxime obcaecati deleniti odio!
        Laudantium, magni!
      </p>

      {projects.map(({ description, link, name, thumbnail }, index) => (
        <Link key={index} href={link}>
          <a className="flex gap-2 items-center  transition-colors hover:bg-light-500 dark:hover:bg-dark-500 p-3">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={name}
                className="w-[60px] h-[60px] object-cover object-center flex-shrink-0"
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
      ))}
    </main>
  )
}

export default ProjectsPage
