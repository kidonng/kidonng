import { IndexId } from '../constants/elements'

if (navigator.language === 'zh-CN') {
  const icp = document.getElementById(IndexId.Icp) as HTMLTemplateElement
  icp.content.querySelector('a')!.textContent = unescape(atob('JXU4RDYzSUNQJXU1OTA3MjAyMTAxMTAwNSV1NTNGNy0x'))
  icp.after(icp.content)
}
