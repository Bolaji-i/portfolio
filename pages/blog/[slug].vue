<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useSeo({
  title: post.value.title,
  description: post.value.description,
  type: 'article'
})
</script>

<template>
  <article v-if="post" style="padding:clamp(56px,9vw,90px) var(--gutter) clamp(56px,9vw,100px);max-width:760px;margin:0 auto">
    <NuxtLink to="/blog" class="back">$ cd ../blog</NuxtLink>

    <div style="display:flex;gap:20px;font-size:14px;color:var(--muted);margin:32px 0 12px">
      <span>{{ post.date }}</span><span>{{ post.read }}</span>
    </div>
    <h1 style="font-size:clamp(28px,5vw,40px);font-weight:700;color:var(--heading);line-height:1.2;margin:0 0 16px">
      {{ post.title }}
    </h1>
    <p style="font-size:clamp(16px,2.2vw,18px);color:var(--muted);margin:0 0 48px">{{ post.description }}</p>

    <div class="prose">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>

<style scoped>
.back { font-size: 15px; color: var(--green); }

/* Markdown body — :deep() because ContentRenderer output isn't scoped to this component. */
.prose :deep(p) { font-size: 17px; line-height: 1.75; color: var(--text); margin: 0 0 22px; }
.prose :deep(h2) {
  font-size: 24px; font-weight: 700; color: var(--heading);
  margin: 48px 0 16px; padding-top: 8px;
}
.prose :deep(h3) { font-size: 19px; font-weight: 700; color: var(--heading); margin: 32px 0 12px; }
.prose :deep(ul), .prose :deep(ol) { margin: 0 0 22px; padding-left: 22px; }
.prose :deep(li) { font-size: 17px; line-height: 1.75; margin-bottom: 8px; }
.prose :deep(a) { color: var(--blue); text-decoration: underline; }
.prose :deep(a:hover) { color: var(--green); }
/* Prose wraps every heading in a self-anchor link — keep it looking like a heading. */
.prose :deep(h2 a), .prose :deep(h3 a) { color: inherit; text-decoration: none; }
.prose :deep(h2 a:hover), .prose :deep(h3 a:hover) { color: var(--green); }
.prose :deep(strong) { color: var(--heading); }
.prose :deep(code) {
  font-family: inherit; font-size: 15px; background: var(--panel2);
  padding: 3px 7px; border-radius: 4px; color: var(--blue);
}
.prose :deep(pre) {
  background: var(--panel); border: 1px solid var(--border); border-radius: 8px;
  padding: 20px; overflow-x: auto; margin: 0 0 22px; font-size: 14px; line-height: 1.6;
}
.prose :deep(pre code) { background: none; padding: 0; color: var(--text); }
.prose :deep(blockquote) {
  border-left: 3px solid var(--border-input); margin: 0 0 22px; padding: 4px 0 4px 20px;
  color: var(--muted);
}
.prose :deep(img) { max-width: 100%; border-radius: 8px; }
.prose :deep(hr) { border: none; border-top: 1px solid var(--border); margin: 40px 0; }
</style>
