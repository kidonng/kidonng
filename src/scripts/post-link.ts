const image = new Image()
image.addEventListener('load', () => {
  const link = document.querySelector<HTMLAnchorElement>('a[href="https://post.xuann.wang"]')!
  link.href = 'https://t.me/s/kichann'
})
image.src = 'https://telegram.org/img/favicon-16x16.png'
