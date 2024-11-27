import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  image: {
    // https://docs.astro.build/en/guides/images/#authorizing-remote-images
    domains: [
      'gravatar.com',
    ],
  },
})
