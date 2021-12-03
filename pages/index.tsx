import type { NextPage } from 'next'
import { Main, Markdown } from '~/components'

const Index: NextPage = () => {
  return (
    <Main>
      <Markdown>
        <h1>Erick Christian</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          commodi possimus sit rem iure, tenetur deleniti, ad mollitia
          laudantium non atque ipsam quod, cum distinctio aliquid totam. Itaque,
          quo culpa!
        </p>

        <img
          src="https://images.unsplash.com/photo-1638500551033-a0f60c8e768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          repellat hic saepe asperiores rerum aliquid molestias accusantium
          distinctio nemo minima ipsum illo, architecto ab maxime obcaecati
          deleniti odio! Laudantium, magni!
        </p>

        <p>
          I love Web and Hybrid App development, but I also like doing other
          things too. Here are a few:
        </p>

        <p>
          I just graduated from SMK Wikrama Bogor this year. But who knows what
          will happens next.
        </p>

        <p>May the dark sigils guide thee. dagger</p>
      </Markdown>
    </Main>
  )
}

export default Index
