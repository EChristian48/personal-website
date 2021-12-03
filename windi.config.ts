import { defineConfig } from 'windicss/helpers'
const scrollbarPlugin = require('@windicss/plugin-scrollbar')

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [scrollbarPlugin]
})
