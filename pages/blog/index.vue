<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-index', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)

useSeo({
  title: 'Blog',
  description: 'Notes on frontend engineering — render performance, design systems, testing, and building for keyboard-first users.'
})
</script>

<template>
  <div>
    <section style="padding:clamp(56px,9vw,90px) var(--gutter) 40px">
      <div class="section-label">$ cat ./blog/*.md</div>
      <h1 class="h-page" style="font-weight:700;color:var(--heading)">Writing</h1>
    </section>
    <section style="padding:40px var(--gutter) clamp(56px,9vw,100px);display:flex;flex-direction:column;border-top:1px solid var(--border)">
      <NuxtLink
        v-for="post in posts" :key="post.path" :to="post.path"
        class="post-row" style="padding:32px 0;border-bottom:1px solid var(--border);display:block"
      >
        <div style="display:flex;flex-wrap:wrap;gap:4px 16px;justify-content:space-between;font-size:14px;color:var(--muted);margin-bottom:10px">
          <span>{{ post.date }}</span><span>{{ post.read }}</span>
        </div>
        <div class="post-title" style="font-size:clamp(20px,3.2vw,26px);font-weight:700;color:var(--heading)">{{ post.title }}</div>
        <div style="font-size:16px;color:var(--muted);margin-top:10px;max-width:800px">{{ post.description }}</div>
      </NuxtLink>

      <p v-if="!posts?.length" style="font-size:16px;color:var(--muted);padding:32px 0">
        No posts yet — add a markdown file to <code>content/blog/</code>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.post-row:hover .post-title { color: var(--green); }
.post-row:hover { color: inherit; }
</style>
