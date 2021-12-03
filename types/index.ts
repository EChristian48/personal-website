export interface ParsedMarkdown<T> {
  data: T
  parsed: string
}

export interface Preview<T> {
  id: string
  data: T
}

export interface Project {
  name: string
  description: string
  link: string
  thumbnail?: string
}

export interface BlogMetadata {
  title: string
  date: string
}

export type Blog = ParsedMarkdown<BlogMetadata>
export type BlogPreview = Preview<BlogMetadata>

export interface MarkdownPage extends ParsedMarkdown<{}> {}
