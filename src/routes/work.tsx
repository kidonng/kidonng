import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronLeft, GitPullRequest, ToyBrick } from 'lucide-react'

import { Route as IndexRoute } from './index.tsx'

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: [{ title: '作品 Work' }],
  }),
  component: Work,
})

function Work() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-12 flex flex-col gap-12 text-xl">
      <header className="flex flex-col gap-4 text-lg">
        <h1 className="text-4xl font-semibold">
          <span lang="zh">作品</span> <span lang="en">Work</span>
        </h1>

        <p className="text-muted-fg">
          <span lang="zh">自我陶醉。</span>
          <br className="lang-divider" />
          <span lang="en">Narcissism.</span>
        </p>

        <span>
          <Link className="inline-flex items-center gap-1" to={IndexRoute.to}>
            <ChevronLeft />
            <span>
              <span lang="zh">首页</span> <span lang="en">Home</span>
            </span>
          </Link>
        </span>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <GitPullRequest />
          <span lang="zh">贡献</span> <span lang="en">Contribute</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <span lang="zh">
              维护 <a href="https://github.com/refined-github/refined-github">Refined GitHub</a>
              （逾十万用户）
            </span>
            <br className="lang-divider" />
            <span lang="en">
              Maintain <a href="https://github.com/refined-github/refined-github">Refined GitHub</a>
              {' (over 100,000 users)'}
            </span>
          </li>

          <li>
            <a href="https://github.com/search?q=author%3Akidonng&type=pullrequests">
              <span lang="zh">千余不同大小 PR</span>
              <br className="lang-divider" />
              <span lang="en">Over 1,000 pull requests of various sizes</span>
            </a>
          </li>

          <li>
            <span lang="zh">
              与
              <a href="https://github.com/search?q=author%3Akidonng+user%3AHomebrew&type=pullrequests">
                包
              </a>
              <a href="https://github.com/search?q=author%3Akidonng+user%3Anixos&type=pullrequests">
                管
              </a>
              <a href="https://github.com/kidonng/scoop-docs">理</a>
              <a href="https://github.com/search?q=author%3Akidonng+user%3Atermux&type=pullrequests">
                器
              </a>
              纠缠不清
            </span>
            <br className="lang-divider" />
            <span lang="en">
              <a href="https://github.com/search?q=author%3Akidonng+user%3AHomebrew&type=pullrequests">
                Wrestled
              </a>{' '}
              <a href="https://github.com/search?q=author%3Akidonng+user%3Anixos&type=pullrequests">
                with
              </a>{' '}
              <a href="https://github.com/kidonng/scoop-docs">package</a>{' '}
              <a href="https://github.com/search?q=author%3Akidonng+user%3Atermux&type=pullrequests">
                managers
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <ToyBrick />
          <span lang="zh">玩具</span> <span lang="en">Toy</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <a href="https://github.com/kidonng/channel">
              <span lang="zh">Telegram 频道镜像</span>
              <br className="lang-divider" />
              <span lang="en">Telegram channel mirror</span>
            </a>
          </li>

          <li>
            <a href="https://github.com/kidonng/tron">
              <span lang="zh">命令行 Electron 启动器</span>
              <br className="lang-divider" />
              <span lang="en">Command-line Electron launcher</span>
            </a>
          </li>

          <li>
            <a href="https://github.com/kidonng/plug.fish">
              <span lang="zh">fish 插件管理器</span>
              <br className="lang-divider" />
              <span lang="en">fish plugin manager</span>
            </a>
          </li>

          <li>
            <a href="https://github.com/kidonng/notion-appimage">
              <span lang="zh">Notion Linux 客户端</span>
              <br className="lang-divider" />
              <span lang="en">Notion app for Linux</span>
            </a>
          </li>

          <li>
            <a href="https://github.com/kidonng/unocss-preset-daisy">
              <span lang="zh">UnoCSS daisyUI 主题</span>
              <br className="lang-divider" />
              <span lang="en">daisyUI preset for UnoCSS</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
