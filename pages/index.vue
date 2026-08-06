<script setup lang="ts">
const projects = [
  { name: 'design-system.tsx', desc: 'Reusable component library — cut UI dev time 30% across teams' },
  { name: 'test-coverage.spec.ts', desc: 'Scaled automated coverage from 50% to 80%' }
]
const posts = [
  { title: 'Why I stopped using CSS-in-JS', date: 'Jul 2026' },
  { title: 'Notes on building for keyboard-first users', date: 'Jun 2026' }
]
</script>

<template>
  <div>
    <section style="padding:clamp(64px,10vw,130px) var(--gutter) clamp(56px,9vw,110px);max-width:1000px">
      <div class="section-label">$ whoami</div>
      <h1 style="font-size:clamp(34px,6.4vw,64px);font-weight:700;line-height:1.2;letter-spacing:-.01em;margin-bottom:28px;color:var(--heading)">
        Frontend Engineer<br><span style="color:var(--blue)">shipping fast, well-tested</span> React apps.
      </h1>
      <p style="font-size:clamp(16px,2.2vw,19px);line-height:1.7;color:var(--muted);max-width:680px">
        4+ years shipping production React &amp; TypeScript. Raised engagement 35% on a 200k-user SaaS platform, cut load times 25%, and grew test coverage from 50% to 80%.
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:44px">
        <NuxtLink to="/work" class="btn btn-primary">./view-work</NuxtLink>
        <NuxtLink to="/resume" class="btn btn-outline">./resume.pdf</NuxtLink>
      </div>
    </section>

    <section style="padding:0 var(--gutter) clamp(56px,9vw,100px)">
      <div class="section-label">$ ls ./projects</div>
      <div class="grid-auto">
        <div v-for="p in projects" :key="p.name" class="card">
          <div class="thumb">project screenshot</div>
          <div style="font-size:21px;font-weight:700;color:var(--heading)">{{ p.name }}</div>
          <div style="font-size:15px;color:var(--muted);margin-top:8px">{{ p.desc }}</div>
        </div>
      </div>
    </section>

    <section style="padding:0 var(--gutter) clamp(56px,9vw,100px)">
      <div class="section-label">$ cat ./blog/latest.md</div>
      <div style="display:flex;flex-direction:column;border-top:1px solid var(--border)">
        <div v-for="post in posts" :key="post.title" style="display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:space-between;padding:26px 0;border-bottom:1px solid var(--border);font-size:clamp(16px,2.2vw,19px);color:var(--heading)">
          <span># {{ post.title }}</span>
          <span style="color:var(--muted);font-size:15px">{{ post.date }}</span>
        </div>
      </div>
    </section>

    <footer style="padding:56px var(--gutter);background:var(--panel);border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between;align-items:center">
      <div style="font-size:clamp(14px,2vw,17px);word-break:break-word">$ mail --to <span style="color:var(--blue)">bolajidaniels.ilori@gmail.com</span></div>
      <div style="display:flex;gap:22px;font-size:15px;color:var(--muted)">
        <a href="https://linkedin.com/in/bolaji-daniels-ilori" target="_blank">linkedin</a>
        <a href="#" target="_blank">github</a>
        <a href="#" target="_blank">x</a>
      </div>
    </footer>
  </div>
</template>
