import { defineConfig } from 'astro/config';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://www.innovaconsult.ca';

/**
 * @astrojs/sitemap strips the slash from the root <loc> when trailingSlash is 'never'.
 * The home canonical is `${SITE}/`, so the sitemap root entry is put back to match it.
 * Runs after the sitemap integration (integrations run in array order).
 */
const sitemapRootSlash = {
  name: 'sitemap-root-slash',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const out = fileURLToPath(dir);
      for (const f of await readdir(out)) {
        if (!/^sitemap-\d+\.xml$/.test(f)) continue;
        const p = `${out}/${f}`;
        const xml = await readFile(p, 'utf8');
        await writeFile(p, xml.replaceAll(`<loc>${SITE}</loc>`, `<loc>${SITE}/</loc>`));
      }
    }
  }
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // /projects/workflow-os 301s to /workflow-os (public/_redirects); the 404 page is noindex.
      filter: (u) => !u.endsWith('/projects/workflow-os') && !u.endsWith('/404'),
      serialize(item) {
        if (item.url === SITE) item.url = `${SITE}/`;
        item.lastmod = new Date().toISOString();
        return item;
      }
    }),
    sitemapRootSlash
  ]
});
