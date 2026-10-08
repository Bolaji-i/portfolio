<script setup lang="ts">
const hobbies = useHobbies()

useSeo({
  title: 'Hobbies',
  description: 'Chess, cycling, aviation, space, hiking and traveling — what I do away from the keyboard.'
})

// Line icons, drawn as a single stroke set so every card reads consistently.
const icons: Record<Hobby['icon'], string> = {
  // Knight in profile, facing left, sitting on the same base the other pieces would use.
  chess: '<path d="M15.4 14V10.6l-1-3.7-1.2-3.3-1.4 2.7-3.6 2.6-1.9 1.8 1.3 1.8 2.3-.8.8 1.4V14z"/><path d="M7 20h10l-1.4-6H8.6z"/>',
  cycling: '<circle cx="5.5" cy="16.5" r="3.5"/><circle cx="18.5" cy="16.5" r="3.5"/><path d="M5.5 16.5l4.5-8h3.5"/><path d="M10 8.5l5 8"/><path d="M13.5 5.5h3"/>',
  // Control tower with a beacon — the ops side, kept distinct from the aircraft above.
  aviation: '<path d="M4 20.5h16"/><path d="M10.2 20.5 10.9 13M13.8 20.5 13.1 13"/><path d="M9.8 13h4.4l1-4.4H8.8z"/><path d="M12 8.6V5"/><circle cx="12" cy="3.8" r="1"/>',
  space: '<path d="M12 2.6c2.3 2.4 3.5 5.4 3.5 8.8v5.1h-7v-5.1c0-3.4 1.2-6.4 3.5-8.8z"/><circle cx="12" cy="9.3" r="1.7"/><path d="M8.5 13.8 6 16.6v2.8l2.5-1.8"/><path d="M15.5 13.8 18 16.6v2.8l-2.5-1.8"/><path d="M10.6 19.2 12 21.6l1.4-2.4"/>',
  hiking: '<path d="M2.5 19.5h19"/><path d="M4 19.5l5.5-10 3.5 6.2"/><path d="M11 19.5l4.5-7.5 4.5 7.5"/><circle cx="18" cy="5.5" r="1.8"/>',
  traveling: '<circle cx="12" cy="12" r="9"/><path d="M3.2 9.5h17.6M3.2 14.5h17.6"/><ellipse cx="12" cy="12" rx="4" ry="9"/>'
}
</script>

<template>
  <div>
    <section style="padding:clamp(56px,9vw,90px) var(--gutter) 40px">
      <div class="section-label">$ ls ~/away-from-keyboard</div>
      <h1 class="h-page" style="font-weight:700;color:var(--heading);margin-bottom:20px">Off the clock</h1>
      <p style="font-size:clamp(16px,2.2vw,18px);line-height:1.7;color:var(--muted);max-width:680px">
        Six things that keep me away from a screen. Most of them reward the same habits
        engineering does — plan the route, pack light, and pay attention to the weather.
      </p>
    </section>

    <section class="grid">
      <div v-for="hobby in hobbies" :key="hobby.slug" class="card hobby">
        <div class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
               stroke-linecap="round" stroke-linejoin="round" v-html="icons[hobby.icon]" />
        </div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:6px">~/{{ hobby.slug }}</div>
        <h2 style="font-size:21px;font-weight:700;color:var(--heading)">{{ hobby.name }}</h2>
        <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
          <span v-for="t in hobby.tags" :key="t" class="tag">{{ t }}</span>
        </div>
        <p style="font-size:15px;line-height:1.7;color:var(--muted);margin-top:16px">{{ hobby.desc }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid {
  padding: 0 var(--gutter) clamp(56px, 9vw, 100px);
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}
/* Six cards: an even 3 + 3 at the widest, 2-up on tablets. */
@media (min-width: 700px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1080px) { .grid { grid-template-columns: repeat(3, 1fr); } }
.hobby { transition: border-color .15s ease, transform .15s ease; }
.hobby:hover { border-color: var(--border-input); transform: translateY(-2px); }

.icon {
  width: 92px; height: 92px; border-radius: 12px; margin-bottom: 20px;
  display: flex; align-items: center; justify-content: center;
  background: var(--panel2); color: var(--green);
}
.icon svg { width: 48px; height: 48px; }

</style>
