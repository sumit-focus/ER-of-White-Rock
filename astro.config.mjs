import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    react(),
    sanity({
      projectId: 'hdx7hgqq',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],

  vite: {
    plugins: [tailwind()],
  },

  adapter: cloudflare(),
});