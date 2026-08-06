import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        date: z.string(),
        read: z.string(),
        // Set to true to keep a post out of the published list.
        draft: z.boolean().default(false)
      })
    })
  }
})
