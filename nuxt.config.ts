export default defineNuxtConfig({
  compatibilityDate: '2026-08-06',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Formspree form ID (the part after /f/ in your endpoint URL).
      // Set via the NUXT_PUBLIC_FORMSPREE_ID env var — no rebuild-time secret needed.
      formspreeId: ''
    }
  },
  app: {
    head: {
      title: 'Bolaji Daniels Ilori — Frontend Engineer',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap' }
      ]
    }
  }
})
