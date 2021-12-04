import htmr from 'htmr'
import type { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Main, Markdown } from '~/components'
import { contentDir } from '~/helper/content'
import { parseMarkdown } from '~/helper/markdown'
import { MarkdownPage } from '~/types'

interface NotesPageProps {
  notes: MarkdownPage
}

const NotesPage: NextPage<NotesPageProps> = ({ notes: { parsed } }) => {
  return (
    <>
      <NextSeo title="Notes" />

      <Main>
        <Markdown>{htmr(parsed)}</Markdown>
      </Main>
    </>
  )
}

export default NotesPage

export const getStaticProps: GetStaticProps<NotesPageProps> = async () => ({
  props: {
    notes: parseMarkdown(contentDir, 'notes')
  }
})
