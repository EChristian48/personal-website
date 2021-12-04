import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Main, ProjectCard } from '~/components'
import { projects } from '~/contents/projects'

const ProjectsPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Projects" />

      <Main>
        <header className="space-y-2">
          <h1>Projects</h1>

          <p>Some of the projects that I have worked on</p>
        </header>

        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </Main>
    </>
  )
}

export default ProjectsPage
