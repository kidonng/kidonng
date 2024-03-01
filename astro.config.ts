import {defineConfig} from 'astro/config'
import {presetTypography, presetUno} from 'unocss'
import unocss from 'unocss/astro'

export default defineConfig({
	integrations: [
		unocss({
			presets: [
				presetUno(),
				presetTypography(),
			],
			injectReset: true,
		}),
	],
	srcDir: '.',
})
