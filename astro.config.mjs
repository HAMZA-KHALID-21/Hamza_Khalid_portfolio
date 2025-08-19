import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/HAMZA-KHALID-21/Hamza_Khalid_portfolio',
  integrations: [mdx(), sitemap(), tailwind()]
});
