import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://HAMZA-KHALID-21.github.io/Hamza_Khalid_portfolio',
  base: '/Hamza_Khalid_portfolio/',
  integrations: [mdx(), sitemap(), tailwind()],
});
