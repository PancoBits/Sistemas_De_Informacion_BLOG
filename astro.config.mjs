// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMarkmap from 'remark-markmap';

// https://astro.build/config
export default defineConfig({
	site: 'https://PancoBits.github.io',
  	base: 'Sistemas_De_Informacion_BLOG',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [
			[remarkMarkmap, { darkThemeSelector: () => false }]
		]
	}
});
