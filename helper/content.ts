import fs from 'fs'
import path from 'path'
import { BlogMetadata, BlogPreview } from '~/types'
import { cleanFileName, parseMarkdown } from './markdown'

export const contentDir = path.join(process.cwd(), 'contents')

export const blogsDir = path.join(process.cwd(), 'contents/blogs')

export const blogsList: BlogPreview[] = fs
  .readdirSync(blogsDir)
  .map((fileName) => {
    const id = cleanFileName(fileName)
    const { data } = parseMarkdown(blogsDir, id)
    return {
      id,
      data: data as BlogMetadata
    }
  })
