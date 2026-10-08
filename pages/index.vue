<script setup lang="ts">
const projects = [
  { name: 'design-system.tsx', desc: 'Reusable component library — cut UI dev time 30% across teams' },
  { name: 'test-coverage.spec.ts', desc: 'Scaled automated test coverage by more than 50%' }
]
const { data: cv } = useCvData()
const certs = cv.en.certs
const posts = [
  { title: 'Why I stopped using CSS-in-JS', date: 'Jul 2026' },
  { title: 'Notes on building for keyboard-first users', date: 'Jun 2026' }
]
// Bound here rather than used straight from the template: the auto-import
// transform reads the script block, so a template-only reference wouldn't resolve.
const email = CONTACT_EMAIL

useSeo({
  // The home page leads with the name; everywhere else reads "<Page> — Bolaji Daniels Ilori".
  documentTitle: 'Bolaji Daniels Ilori — Software & Cloud Engineer',
  title: 'Bolaji Daniels Ilori — Software & Cloud Engineer',
  description: 'Software & cloud engineer in Munich with 4+ years building React and TypeScript web applications. AWS Certified Solutions Architect – Associate. Raised engagement 35% on a SaaS platform serving 1M+ monthly users.'
})
</script>

<template>
  <div>
    <section style="padding:clamp(64px,10vw,130px) var(--gutter) clamp(56px,9vw,110px);max-width:1000px">
      <div class="section-label">$ whoami</div>
      <h1 style="font-size:clamp(34px,6.4vw,64px);font-weight:700;line-height:1.2;letter-spacing:-.01em;margin-bottom:28px;color:var(--heading)">
        Software &amp; Cloud Engineer<br><span style="color:var(--blue)">shipping fast, well-tested</span> React apps.
      </h1>
      <p style="font-size:clamp(16px,2.2vw,19px);line-height:1.7;color:var(--muted);max-width:680px">
        4+ years building responsive, high-performance web applications in React &amp; TypeScript. Improved user engagement by 35% on a SaaS platform serving 1M+ monthly users, cut page load times considerably, and raised automated test coverage by more than 50%. AWS certified; available immediately.
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
      <div class="section-label">$ ls ./certifications</div>
      <div class="grid-auto">
        <div v-for="c in certs" :key="c.name" class="card">
          <div style="font-size:19px;font-weight:700;color:var(--heading)">{{ c.name }}</div>
          <div style="font-size:15px;color:var(--muted);margin-top:8px">{{ c.issuer }}<template v-if="c.year"> · {{ c.year }}</template></div>
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
      <div style="font-size:clamp(14px,2vw,17px);word-break:break-word">$ mail --to <a :href="`mailto:${email}`" style="color:var(--blue)">{{ email }}</a></div>
      <SocialLinks />
    </footer>
  </div>
</template>
