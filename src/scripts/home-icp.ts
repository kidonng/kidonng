import { HomeElements } from '../constants/home-elements.ts'

if (navigator.language === 'zh-CN') {
  const ICP = unescape(atob('JXU4RDYzSUNQJXU1OTA3MjAyMTAxMTAwNSV1NTNGNy0x'))

  const icpTemplate = document.getElementById(HomeElements.icpTemplate) as HTMLTemplateElement
  icpTemplate.content.querySelector('a')!.textContent = ICP
  icpTemplate.after(icpTemplate.content)
}
