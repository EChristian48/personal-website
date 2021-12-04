import htmr from 'htmr'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ParsedUrlQuery } from 'querystring'
import { Main, Markdown } from '~/components'
import { blogsDir, blogsList } from '~/helper/content'
import { parseMarkdown } from '~/helper/markdown'
import { Blog } from '~/types'

interface BlogPageParams extends ParsedUrlQuery {
  id: string
}

interface BlogPageProps {
  blog: Blog
}

const BlogsIndex: NextPage<BlogPageProps> = ({
  blog: {
    data: { date, title },
    parsed
  }
}) => {
  return (
    <>
      <NextSeo title={title} />
      <Main>
        <h1>{title}</h1>
        <div>{date}</div>

        <Markdown>{htmr(parsed)}</Markdown>
      </Main>
    </>
  )
}

export default BlogsIndex

export const getStaticPaths: GetStaticPaths<BlogPageParams> = async () => {
  return {
    paths: blogsList.map(({ id }) => ({
      params: {
        id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps, BlogPageParams> =
  async ({ params }) => {
    return {
      props: {
        blog: parseMarkdown(blogsDir, params?.id!) as Blog
      }
    }
  }
