import htmr from 'htmr'
import type { GetStaticProps, NextPage } from 'next'
import { Main, Markdown } from '~/components'
import { contentDir } from '~/helper/content'
import { parseMarkdown } from '~/helper/markdown'
import { Notes } from '~/types'

interface NotesPageProps {
  notes: Notes
}

const NotesPage: NextPage<NotesPageProps> = ({ notes: { parsed } }) => {
  return (
    <Main>
      <Markdown>{htmr(parsed)}</Markdown>
    </Main>
  )
}

export default NotesPage

export const getStaticProps: GetStaticProps<NotesPageProps> = async () => ({
  props: {
    notes: parseMarkdown(contentDir, 'notes')
  }
})
