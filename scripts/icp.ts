if (navigator.language === 'zh-CN') {
	const link = document.createElement('a')
	link.href = 'https://beian.miit.gov.cn/'
	link.textContent = unescape(atob('JXU4RDYzSUNQJXU1OTA3MjAyMTAxMTAwNSV1NTNGNy0x'))

	document.getElementById('icp')!.append(link)
}
