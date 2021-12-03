import type { GetStaticProps, NextPage } from 'next'
import { BlogCard } from '~/components'
import { blogsList } from '~/helper/content'
import { BlogPreview } from '~/types'

interface BlogsIndexProps {
  blogs: BlogPreview[]
}

const BlogsIndex: NextPage<BlogsIndexProps> = ({ blogs }) => {
  return (
    <main className="space-y-6">
      <h1>Blogs / Writings</h1>

      {blogs.map((blog) => (
        <BlogCard {...blog} key={blog.id} />
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
