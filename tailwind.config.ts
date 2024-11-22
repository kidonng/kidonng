import type { Config } from 'tailwindcss'
import typograhy from '@tailwindcss/typography'

export default {
  content: [
    'pages/**/*.astro',
  ],
  plugins: [
    typograhy,
  ],
} satisfies Config
