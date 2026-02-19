import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://erofwhiterock.com',
  output: 'server',
  integrations: [react(), sanity({
    projectId: 'hdx7hgqq',
    dataset: 'production',
    useCdn: false,
    studioBasePath: '/studio',
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), sitemap()],

  vite: {
    plugins: [tailwind()],
  },

  adapter: vercel(),
});