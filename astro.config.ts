import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    icon(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  site: 'https://xuann.wang',
})
