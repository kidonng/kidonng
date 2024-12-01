import { icpId } from '../constants/elements'

if (navigator.language === 'zh-CN') {
  const template = document.getElementById(icpId) as HTMLTemplateElement
  template.content.querySelector('a')!.textContent = unescape(atob('JXU4RDYzSUNQJXU1OTA3MjAyMTAxMTAwNSV1NTNGNy0x'))
  template.after(template.content)
}
