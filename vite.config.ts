import tailwind from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  plugins: [
    imagetools(),
    tailwind(),
    tanstackStart({
      prerender: {
        enabled: true,
      },
    }),
    react(),
  ],
  fmt: {
    ignorePatterns: ['src/routeTree.gen.ts'],
    semi: false,
    singleQuote: true,
    // https://oxc.rs/docs/guide/usage/formatter/sorting.html#sort-imports
    sortImports: {
      groups: [
        'type-import',
        ['value-builtin', 'value-external'],
        'type-internal',
        'value-internal',
        ['type-parent', 'type-sibling', 'type-index'],
        ['value-parent', 'value-sibling', 'value-index'],
        'unknown',
      ],
    },
  },
  lint: {
    ignorePatterns: ['src/routeTree.gen.ts'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      // Remove unused import
      // https://github.com/oxc-project/oxc/issues/18301#issuecomment-4285035416
      'eslint/no-unused-vars': ['warn', { fix: { imports: 'safe-fix' } }],
      'typescript/consistent-type-imports': 'error',
    },
  },
})
