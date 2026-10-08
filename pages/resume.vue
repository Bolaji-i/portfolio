<script setup lang="ts">
const { data } = useCvData()
const lang = ref<'en' | 'de'>('en')
const d = computed(() => data[lang.value])

useSeo({
  title: 'Resume',
  description: 'Software & cloud engineer in Munich — 4+ years of React and TypeScript, AWS Certified Solutions Architect – Associate. Available in English and German, downloadable as PDF.'
})
</script>

<template>
  <div>
    <section style="padding:clamp(56px,9vw,90px) var(--gutter) 20px;display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between;align-items:flex-end">
      <div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">
          <div class="section-label" style="margin-bottom:0">{{ d.labels.cmd }}</div>
          <div style="display:flex;border:1px solid var(--border-input);border-radius:6px;overflow:hidden">
            <button
              class="lang-btn"
              :style="{ background: lang === 'en' ? 'var(--green-fill)' : 'transparent', color: lang === 'en' ? '#fff' : 'var(--muted)' }"
              @click="lang = 'en'"
            >EN</button>
            <button
              class="lang-btn"
              :style="{ background: lang === 'de' ? 'var(--green-fill)' : 'transparent', color: lang === 'de' ? '#fff' : 'var(--muted)' }"
              @click="lang = 'de'"
            >DE</button>
          </div>
        </div>
        <h1 class="h-page" style="font-weight:700;color:var(--heading)">Bolaji Daniels Ilori</h1>
        <div style="font-size:clamp(15px,2.2vw,18px);color:var(--muted);margin-top:8px">{{ d.role }} — {{ d.location }}</div>
        <p v-for="para in d.profile" :key="para" style="font-size:16px;color:var(--muted);margin-top:16px;max-width:820px;line-height:1.6">{{ para }}</p>
      </div>
      <a :href="d.pdf" download class="btn btn-primary" style="white-space:nowrap">{{ d.labels.download }}</a>
    </section>

    <section style="padding:50px var(--gutter) 0">
      <div class="section-label" style="border-bottom:1px solid var(--border);padding-bottom:14px">{{ d.labels.experience }}</div>
      <div style="display:flex;flex-direction:column;gap:26px;margin-top:26px">
        <div v-for="exp in d.experience" :key="exp.company">
          <div style="display:flex;flex-wrap:wrap;gap:4px 16px;justify-content:space-between;font-size:clamp(17px,2.4vw,19px);font-weight:700;color:var(--heading)">
            <span>{{ exp.role }} — {{ exp.company }}</span><span style="font-size:15px;color:var(--muted);font-weight:400">{{ exp.meta }}</span>
          </div>
          <ul class="bullets">
            <li v-for="b in exp.bullets" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section style="padding:50px var(--gutter) 0">
      <div class="section-label" style="border-bottom:1px solid var(--border);padding-bottom:14px">{{ d.labels.skills }}</div>
      <div style="display:flex;flex-direction:column;gap:14px;margin-top:26px;max-width:900px">
        <div v-for="g in d.skills" :key="g.label" style="font-size:15px;color:var(--muted);line-height:1.6">
          <span style="color:var(--blue);font-weight:600">{{ g.label }}:</span> {{ g.items }}
        </div>
      </div>
    </section>

    <section style="padding:50px var(--gutter) 0">
      <div class="section-label" style="border-bottom:1px solid var(--border);padding-bottom:14px">{{ d.labels.education }}</div>
      <div v-for="edu in d.education" :key="edu.degree" style="margin-top:18px">
        <div style="font-size:18px;color:var(--heading);font-weight:600">{{ edu.degree }}</div>
        <div style="font-size:15px;color:var(--muted);margin-top:6px">{{ edu.school }}</div>
      </div>
    </section>

    <section style="padding:50px var(--gutter) 0">
      <div class="section-label" style="border-bottom:1px solid var(--border);padding-bottom:14px">{{ d.labels.certs }}</div>
      <div class="grid-auto" style="margin-top:26px">
        <div v-for="c in d.certs" :key="c.name" class="card">
          <div style="font-size:18px;color:var(--heading);font-weight:600">{{ c.name }}</div>
          <div style="font-size:15px;color:var(--muted);margin-top:6px">{{ c.issuer }}<template v-if="c.year"> · {{ c.year }}</template></div>
        </div>
      </div>
    </section>

    <section style="padding:50px var(--gutter) 60px">
      <div class="section-label" style="border-bottom:1px solid var(--border);padding-bottom:14px">{{ d.labels.languages }}</div>
      <div style="font-size:16px;color:var(--muted);margin-top:20px">{{ d.languages }}</div>
    </section>
  </div>
</template>

<style scoped>
.lang-btn {
  padding: 4px 12px; font-size: 13px; font-weight: 600; cursor: pointer;
  border: none; font-family: inherit;
}
.bullets {
  margin: 10px 0 0; padding-left: 20px; max-width: 900px;
  font-size: 15px; color: var(--muted); line-height: 1.6;
}
.bullets li + li { margin-top: 6px; }
</style>
