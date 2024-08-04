import type { Config } from 'tailwindcss'
import typograhy from '@tailwindcss/typography'

const config: Config = {
  content: [
    'pages/**/*.astro',
  ],
  plugins: [
    typograhy,
  ],
}

export default config
