import htmr from 'htmr'
import type { GetStaticProps, NextPage } from 'next'
import { Main, Markdown } from '~/components'
import { contentDir } from '~/helper/content'
import { parseMarkdown } from '~/helper/markdown'
import { MarkdownPage } from '~/types'
import Head from 'next/head'

interface IndexProps {
  index: MarkdownPage
}

const Index: NextPage<IndexProps> = ({ index: { parsed } }) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="jwuGaag6OVJJ8VNJa6euHdXW3AYBhR9ZXf4mgY1K6Zk"
        />
      </Head>

      <Main>
        <Markdown>{htmr(parsed)}</Markdown>
      </Main>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => ({
  props: {
    index: parseMarkdown(contentDir, 'index')
  }
})
