/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute, ScriptOnce } from '@tanstack/react-router'

import scripts from '../scripts.js?raw'
import styles from '../styles.css?url'

if (import.meta.env.DEV) void import('../fonts/Xiaolai-Regular.ttf')
else void import('../fonts/Xiaolai-Regular.ttf?subsets')

export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width' }],
    links: [{ rel: 'stylesheet', href: styles }],
  }),
  component: Root,
})

function Root() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <ScriptOnce>{scripts}</ScriptOnce>
      </head>
      <body className="bg-muted-bg font-xiaolai">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
