<script setup lang="ts">
const projects = [
  { name: 'design-system.tsx', desc: 'Reusable component library — cut UI dev time 30% across teams', tags: ['React', 'TypeScript', 'GraphQL'] },
  { name: 'test-coverage.spec.ts', desc: 'Scaled automated coverage from 50% to 80%', tags: ['Playwright', 'Vitest'] },
  { name: 'core-web-vitals.ts', desc: 'Code-splitting & lazy loading — cut load times 25%', tags: ['Performance', 'Core Web Vitals'] },
  { name: 'legacy-vue-migration', desc: 'Refactored & modernized a legacy Vue.js codebase', tags: ['Vue.js', 'Refactor'] }
]
</script>

<template>
  <div>
    <section style="padding:clamp(56px,9vw,90px) var(--gutter) 40px">
      <div class="section-label">$ ls -la ./projects</div>
      <h1 class="h-page" style="font-weight:700;color:var(--heading)">Selected work</h1>
    </section>
    <section class="grid-auto" style="padding:0 var(--gutter) clamp(56px,9vw,100px)">
      <div v-for="p in projects" :key="p.name" class="card">
        <div class="thumb">project screenshot</div>
        <div style="font-size:21px;font-weight:700;color:var(--heading)">{{ p.name }}</div>
        <div style="font-size:15px;color:var(--muted);margin-top:8px">{{ p.desc }}</div>
        <div style="display:flex;gap:10px;margin-top:16px">
          <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </section>
  </div>
</template>
