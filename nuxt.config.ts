export default defineNuxtConfig({
  compatibilityDate: '2026-08-06',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Formspree form ID (the part after /f/ in your endpoint URL).
      // Set via the NUXT_PUBLIC_FORMSPREE_ID env var — no rebuild-time secret needed.
      formspreeId: '',
      // Public origin, no trailing slash — from NUXT_PUBLIC_SITE_URL.
      // Baked in at generate time; drives canonical URLs and absolute OG image paths.
      siteUrl: ''
    }
  },
  app: {
    head: {
      title: 'Bolaji Daniels Ilori — Software & Cloud Engineer',
      link: [
        // SVG favicon adapts its green to the tab bar's theme; the PNGs are the
        // fallback for browsers that don't take an SVG icon.
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap' }
      ]
    }
  }
})
