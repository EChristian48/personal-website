import type { GetStaticProps, NextPage } from 'next'
import { blogsList } from '~/helper/content'
import { BlogPreview } from '~/types'
import Link from 'next/link'

interface BlogsIndexProps {
  blogs: BlogPreview[]
}

const BlogsIndex: NextPage<BlogsIndexProps> = ({ blogs }) => {
  return (
    <main className="space-y-6">
      <h1>Blogs / Writings</h1>

      {blogs.map(({ id, data: { date, title } }) => (
        <Link key={id} href={{ pathname: `/blogs/${id}` }}>
          <a className="block p-4 bg-light-400 dark:bg-dark-800 hover:bg-light-700 dark:hover:bg-dark-500 transition-colors">
            <article>
              <div className="text-xl">{title}</div>
              <div className="text-sm">{date}</div>
            </article>
          </a>
        </Link>
      ))}
    </main>
  )
}

export default BlogsIndex

export const getStaticProps: GetStaticProps<BlogsIndexProps> = async () => ({
  props: {
    blogs: blogsList
  }
})
