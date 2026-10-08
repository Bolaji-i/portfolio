/**
 * Writes sitemap.xml and robots.txt into the generated site.
 *
 * Routes are derived from the prerendered output rather than a hand-kept list,
 * so a new page or blog post shows up in the sitemap without anyone remembering
 * to add it. Both files need an absolute origin, which is why this runs after
 * `nuxt generate` and reads NUXT_PUBLIC_SITE_URL — set that in the Cloudflare
 * Pages dashboard. Without it the build still succeeds; the two files are just
 * skipped, so a preview deploy never publishes a sitemap pointing at the wrong host.
 */
import { readdir, writeFile, stat, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const OUT = '.output/public'

/**
 * Nuxt loads .env itself, but this script is a separate `node` process and Node
 * does not read .env on its own — so without this, local builds would silently
 * skip both files while CI worked fine. A real environment variable always wins,
 * so the Cloudflare dashboard value beats anything in a local file.
 */
async function readEnvFile(key) {
  try {
    const text = await readFile('.env', 'utf8')
    for (const line of text.split('\n')) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)$/)
      if (match && match[1] === key) return match[2].trim().replace(/^["']|["']$/g, '')
    }
  } catch {
    // No .env here (CI, or a clean checkout) — the real environment is the source.
  }
  return ''
}

const raw = process.env.NUXT_PUBLIC_SITE_URL ?? await readEnvFile('NUXT_PUBLIC_SITE_URL')
const siteUrl = raw.trim().replace(/\/+$/, '')

if (!siteUrl) {
  console.warn(
    '\n  postbuild: NUXT_PUBLIC_SITE_URL is not set — skipping sitemap.xml and robots.txt.' +
    '\n  Set it to your origin (e.g. https://example.com) to emit both.\n'
  )
  process.exit(0)
}

if (!/^https?:\/\/[^/]+$/.test(siteUrl)) {
  console.error(`\n  postbuild: NUXT_PUBLIC_SITE_URL is not a bare origin: "${siteUrl}"`)
  console.error('  Expected something like https://example.com (no path, no trailing slash).\n')
  process.exit(1)
}

/** Collect every prerendered index.html and map it back to its route. */
async function collectRoutes(dir = OUT, route = '') {
  const found = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      found.push(...await collectRoutes(full, `${route}/${entry.name}`))
    } else if (entry.name === 'index.html') {
      const { mtime } = await stat(full)
      found.push({ path: route || '/', lastmod: mtime.toISOString().slice(0, 10) })
    }
  }
  return found
}

const routes = (await collectRoutes()).sort((a, b) => a.path.localeCompare(b.path))

if (routes.length === 0) {
  console.error(`\n  postbuild: no prerendered pages found under ${OUT}/ — did generate run?\n`)
  process.exit(1)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${siteUrl}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

await writeFile(join(OUT, 'sitemap.xml'), sitemap)
await writeFile(join(OUT, 'robots.txt'), robots)

console.log(`  postbuild: sitemap.xml (${routes.length} routes) + robots.txt → ${siteUrl}`)
