<script setup lang="ts">
const route = useRoute()
const links = [
  { to: '/work', label: './work' },
  { to: '/blog', label: './blog' },
  { to: '/resume', label: './resume' },
  { to: '/hobbies', label: './hobbies' },
  { to: '/contact', label: './contact' }
]
</script>

<template>
  <div class="page">
    <nav class="nav">
      <NuxtLink to="/" class="nav-brand">
        <LogoMark :size="26" />
        <span class="brand-text">bolaji@ilori<span class="dim">:~$</span></span>
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ active: route.path.startsWith(link.to) }"
        >{{ link.label }}</NuxtLink>
      </div>
    </nav>
    <slot />
  </div>
</template>
