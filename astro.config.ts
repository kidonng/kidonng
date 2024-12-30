import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  site: 'https://xuann.wang',
  image: {
    // https://docs.astro.build/en/guides/images/#authorizing-remote-images
    domains: [
      'gravatar.com',
    ],
  },
})
