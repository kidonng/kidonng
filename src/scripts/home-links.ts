import { HomeLinks } from '../constants/home-links.ts'

const channelLink = document.querySelector<HTMLAnchorElement>(`a[href="${HomeLinks.channel.original}"]`)!
channelLink.href = HomeLinks.channel.mirror

const notionLinks = document.querySelectorAll<HTMLAnchorElement>(`a[href^="${HomeLinks.notion.original}"]`)
for (const link of notionLinks) {
  link.href = link.href.replace(HomeLinks.notion.original, HomeLinks.notion.mirror)
}

const timeoutController = new AbortController()
const timeoutSignal = timeoutController.signal

const networkProbe = new Image()
networkProbe.addEventListener('load', () => {
  channelLink.href = HomeLinks.channel.original

  for (const link of notionLinks) {
    link.href = link.href.replace(HomeLinks.notion.mirror, HomeLinks.notion.original)
  }
}, { signal: timeoutSignal })
timeoutSignal.addEventListener('abort', () => {
  networkProbe.src = ''
})

networkProbe.src = 'https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico'
setTimeout(() => {
  timeoutController.abort()
}, 3_000)
