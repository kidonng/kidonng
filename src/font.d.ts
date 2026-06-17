// https://github.com/KonghaYao/cn-font-split/tree/release/packages/vite#-usage

declare module '*.ttf?subsets' {
  const css: {
    family: string
    style: string
    weight: string
    display: string
  }
  export { css }
}
