/**
 * Per-page metadata: document title, description, canonical URL, and the Open Graph
 * and Twitter tags that decide what a shared link looks like.
 *
 * Wrapped in one call so every page emits the same shape — the alternative is a
 * dozen near-identical tags repeated seven times, where one page quietly ends up
 * missing an og:image.
 *
 * Canonical and image URLs must be absolute, so both need the origin. It comes from
 * NUXT_PUBLIC_SITE_URL at build time; if it is unset (a local build) the absolute
 * tags are omitted rather than emitted as broken relative paths.
 */
export type SeoInput = {
  /** Human name for the page — used for og:title and, by default, the document title. */
  title: string
  description: string
  /** Overrides the document title when the "<title> — Name" pattern doesn't suit (the home page). */
  documentTitle?: string
  type?: 'website' | 'article'
}

const SITE_NAME = 'Bolaji Daniels Ilori'

export function useSeo(input: SeoInput) {
  const siteUrl = (useRuntimeConfig().public.siteUrl as string) || ''
  const route = useRoute()

  const canonical = siteUrl ? `${siteUrl}${route.path}` : ''
  const ogImage = siteUrl ? `${siteUrl}/og-image.png` : ''

  useSeoMeta({
    title: input.documentTitle ?? `${input.title} — ${SITE_NAME}`,
    description: input.description,

    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type ?? 'website',
    ogSiteName: SITE_NAME,
    ogLocale: 'en_US',
    ...(canonical ? { ogUrl: canonical } : {}),
    ...(ogImage ? { ogImage, ogImageWidth: 1200, ogImageHeight: 630, ogImageAlt: `${SITE_NAME} — Software & Cloud Engineer` } : {}),

    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    ...(ogImage ? { twitterImage: ogImage } : {})
  })

  if (canonical) {
    useHead({ link: [{ rel: 'canonical', href: canonical }] })
  }
}
