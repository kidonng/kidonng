import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronRight, Code, Mail, MessageCircle, Notebook, Pen, Rss, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import DesktopImage from '../images/desktop.webp'
import DesktopImageThumb from '../images/desktop.webp?w=704&url'
import DesktopImageThumb2x from '../images/desktop.webp?w=1408&url'
import { Route as AboutRoute } from './about.tsx'
import { Route as WorkRoute } from './work.tsx'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: 'Kid (@kidonng)' }],
  }),
  component: Index,
})

function Index() {
  const { showOriginalLink } = useShowOriginalLink()

  return (
    <main className="max-w-3xl mx-auto px-8 py-12 flex flex-col gap-12 text-2xl">
      <header className="flex flex-col gap-4 text-lg">
        <h1 className="text-4xl font-semibold">Kid</h1>

        <p className="text-muted-fg">
          <span lang="zh">兴趣使然的 Web 开发。</span>
          <br className="lang-divider" />
          <span lang="en">Hobbyist-turned web developer.</span>
        </p>

        <span className="inline-flex gap-4">
          <Link className="inline-flex items-center gap-1" to={AboutRoute.to}>
            <span>
              <span lang="zh">关于</span> <span lang="en">About</span>
            </span>
            <ChevronRight />
          </Link>

          <Link className="inline-flex items-center gap-1" to={WorkRoute.to}>
            <span>
              <span lang="zh">作品</span> <span lang="en">Work</span>
            </span>
            <ChevronRight />
          </Link>
        </span>
      </header>

      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href={
                showOriginalLink ? 'https://t.me/s/kichann' : 'https://channel.xuann.wang/s/kichann'
              }
            >
              <Rss />
              <span lang="zh">想法</span>
              <span lang="en">Thought</span>
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href="https://github.com/kidonng"
            >
              <Code />
              <span lang="zh">代码</span>
              <span lang="en">Code</span>
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href={
                showOriginalLink
                  ? 'https://kidonng.notion.site/write'
                  : 'https://kid.super.site/write'
              }
            >
              <Pen />
              <span lang="zh">写作</span>
              <span lang="en">Write</span>
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href={
                showOriginalLink
                  ? 'https://kidonng.notion.site/note'
                  : 'https://kid.super.site/note'
              }
            >
              <Notebook />
              <span lang="zh">笔记</span>
              <span lang="en">Note</span>
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href={
                showOriginalLink
                  ? 'https://kidonng.notion.site/review'
                  : 'https://kid.super.site/review'
              }
            >
              <Star />
              <span lang="zh">评论</span>
              <span lang="en">Review</span>
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href="https://t.me/kidonng"
            >
              <MessageCircle />
              <span lang="zh">聊天</span>
              <span lang="en">Chat</span>
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-fg hover:text-accent hover:no-underline"
              href="mailto:hi@xuann.wang"
            >
              <Mail />
              <span lang="zh">邮件</span>
              <span lang="en">Mail</span>
            </a>
          </li>
        </ul>
      </nav>

      <a href={DesktopImage}>
        <img
          className="rounded-lg transition hover:scale-105"
          src={DesktopImageThumb}
          srcSet={`${DesktopImageThumb2x} 2x`}
          alt="桌面 Desktop"
          width={704}
          height={528}
        />
      </a>

      <ICP />
    </main>
  )
}

function useShowOriginalLink() {
  const [showOriginalLink, setShowOriginalLink] = useState(true)

  useEffect(() => {
    setShowOriginalLink(false)

    const probe = new Image()
    const signal = AbortSignal.timeout(3_000)
    probe.addEventListener(
      'load',
      () => {
        setShowOriginalLink(true)
      },
      { signal },
    )
    signal.addEventListener('abort', () => {
      probe.src = ''
    })

    probe.src = 'https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico'
  }, [])

  return { showOriginalLink }
}

function ICP() {
  const number = unescape(atob('JXU4RDYzSUNQJXU1OTA3MjAyMTAxMTAwNSV1NTNGNy0x'))
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (navigator.language === 'zh-CN') setShow(true)
  }, [])

  if (!show) return null

  return (
    <footer>
      <a
        className="text-xs text-muted-fg font-light tracking-wide"
        href="https://beian.miit.gov.cn"
      >
        {number}
      </a>
    </footer>
  )
}
