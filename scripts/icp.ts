if (navigator.language === 'zh-CN') {
	const template = document.querySelector<HTMLTemplateElement>('#icp')!

	template.content.querySelector('a')!.textContent = unescape(atob('JXU4RDYzSUNQJXU1OTA3MjAyMTAxMTAwNSV1NTNGNy0x'))

	template.after(template.content)
}
