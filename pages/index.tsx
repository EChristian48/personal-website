import htmr from 'htmr'
import type { GetStaticProps, NextPage } from 'next'
import { Main, Markdown } from '~/components'
import { contentDir } from '~/helper/content'
import { parseMarkdown } from '~/helper/markdown'
import { MarkdownPage } from '~/types'

interface IndexProps {
  index: MarkdownPage
}

const Index: NextPage<IndexProps> = ({ index: { parsed } }) => {
  return (
    <Main>
      <Markdown>{htmr(parsed)}</Markdown>
    </Main>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => ({
  props: {
    index: parseMarkdown(contentDir, 'notes')
  }
})
