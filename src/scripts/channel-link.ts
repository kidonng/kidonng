const probe = new Image()

probe.addEventListener('load', () => {
  const channelLink = document.querySelector<HTMLAnchorElement>('a[href="https://channel.xuann.wang"]')!
  channelLink.href = 'https://t.me/s/kichann'
})

probe.src = 'https://telegram.org/img/favicon-16x16.png'
