const channel = 'https://t.me/s/kichann'
const mirror = 'https://channel.xuann.wang'

const link = document.querySelector<HTMLAnchorElement>(`a[href="${channel}"]`)!
link.href = mirror

const probe = new Image()
probe.addEventListener('load', () => {
  link.href = channel
})
probe.src = 'https://telegram.org/img/favicon-16x16.png'
