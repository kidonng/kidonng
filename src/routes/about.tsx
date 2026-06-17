import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronLeft, Gamepad2, Heart, Laptop, Music, Sparkle } from 'lucide-react'

import { Route as IndexRoute } from './index.tsx'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: '关于 About' }],
  }),
  component: About,
})

function About() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-12 flex flex-col gap-12 text-xl">
      <header className="flex flex-col gap-4 text-lg">
        <h1 className="text-4xl font-semibold">
          <span lang="zh">关于</span> <span lang="en">About</span>
        </h1>

        <p className="text-muted-fg">
          <span lang="zh">矛盾的化身。</span>
          <br className="lang-divider" />
          <span lang="en">Embodiment of ambivalence.</span>
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
          <Laptop />
          <span lang="zh">开发</span> <span lang="en">Develop</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <span lang="zh">折腾博客入门</span>
            <br className="lang-divider" />
            <span lang="en">Started with blog tinkering</span>
          </li>

          <li>
            <span lang="zh">用 Vim（模式）</span>
            <br className="lang-divider" />
            <span lang="en">Use Vim (mode)</span>
          </li>

          <li>
            <span lang="zh">JavaScript 不写分号</span>
            <br className="lang-divider" />
            <span lang="en">JavaScript without semicolons</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Heart />
          <span lang="zh">兴趣</span> <span lang="en">Interest</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <span lang="zh">
              <a href="https://chii.in/person/6709">水母老师</a>
            </span>{' '}
            <span lang="en">
              <a href="https://yuruyuri.fandom.com/wiki/Namori">Namori</a>
            </span>
          </li>

          <li>
            <span lang="zh">英译日漫</span> <span lang="en">English-translated manga</span>
          </li>

          <li>
            <span lang="zh">百合</span> <span lang="en">Yuri</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Music />
          <span lang="zh">音乐</span> <span lang="en">Music</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <span lang="zh">
              <a href="https://chii.in/person/7009">鹿乃</a>
            </span>{' '}
            <span lang="en">
              <a href="https://en.wikipedia.org/wiki/Kano_(Japanese_musician)">Kano</a>
            </span>
          </li>

          <li>
            <span lang="zh">
              <a href="https://chii.in/person/29705">夜鹿</a>
            </span>{' '}
            <span lang="en">
              <a href="https://en.wikipedia.org/wiki/Yorushika">Yorushika</a>
            </span>
          </li>

          <li>
            <span lang="zh">歌声合成（Vocaloid 等）</span>{' '}
            <span lang="en">Singing synthesizer (Vocaloid etc.)</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Gamepad2 />
          <span lang="zh">游戏</span> <span lang="en">Game</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <span lang="zh">独立游戏</span> <span lang="en">Indie game</span>
          </li>

          <li>
            <a href="https://enka.network/u/250558244/">
              <span lang="zh">米</span>
              <span lang="en">mi</span>
            </a>
            <a href="https://enka.network/hsr/106540873/">
              <span lang="zh">哈</span>
              <span lang="en">Ho</span>
            </a>
            <a href="https://enka.network/zzz/25634437/">
              <span lang="zh">游</span>
              <span lang="en">Yo</span>
            </a>
          </li>

          <li>
            <a href="https://osu.ppy.sh/users/14347155">osu!</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Sparkle />
          <span lang="zh">花絮</span> <span lang="en">Tidbit</span>
        </h2>

        <ul className="list-disc ml-6 flex flex-col gap-2">
          <li>
            <span lang="zh">幼时坠下三楼安然无恙</span>
            <br className="lang-divider" />
            <span lang="en">Fell from the third floor unharmed as a kid</span>
          </li>

          <li>
            <span lang="zh">
              推<a href="https://chii.in/character/13012">樱子</a>
              {' × '}
              <a href="https://chii.in/character/13004">灯里</a>
            </span>
            <br className="lang-divider" />
            <span lang="en">
              {'Ship '}
              <a href="https://yuruyuri.fandom.com/wiki/Sakurako_%C5%8Cmuro">Sakurako</a>
              {' × '}
              <a href="https://yuruyuri.fandom.com/wiki/Akari_Akaza">Akari</a>
            </span>
          </li>

          <li>
            <span lang="zh">说 Twitter 不说 X</span>
            <br className="lang-divider" />
            <span lang="en">Twitter yes X no</span>
          </li>

          <li lang="zh">
            惋惜<a href="https://www.gcores.com/articles/121924">中文互联网中讨论的消亡</a>
          </li>
        </ul>
      </section>
    </main>
  )
}
