<script setup lang="ts">
const EMAIL = 'bolajidaniels.ilori@gmail.com'

const form = reactive({ name: '', email: '', message: '', website: '' })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const error = ref('')

const formspreeId = useRuntimeConfig().public.formspreeId

async function onSubmit() {
  if (status.value === 'sending') return

  if (!formspreeId) {
    status.value = 'error'
    error.value = 'The form is not configured yet. Email me directly and I will get it.'
    return
  }

  status.value = 'sending'
  error.value = ''

  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: `Portfolio message from ${form.name}`,
        _gotcha: form.website // honeypot: Formspree drops the message if a bot fills it
      })
    })

    if (!res.ok) {
      // Formspree reports validation problems as { errors: [{ message }] }
      const body = await res.json().catch(() => null)
      throw new Error(body?.errors?.map((e: { message: string }) => e.message).join(', '))
    }

    status.value = 'sent'
  } catch (e) {
    status.value = 'error'
    error.value = (e as Error).message || 'Something went wrong sending that.'
  }
}
</script>

<template>
  <div style="padding:clamp(64px,10vw,140px) var(--gutter) clamp(56px,9vw,100px);max-width:800px;margin:0 auto">
    <div class="section-label">$ ./send-message.sh</div>
    <h1 style="font-size:clamp(30px,5.4vw,44px);font-weight:700;color:var(--heading);margin-bottom:16px">Get in touch</h1>
    <p style="font-size:clamp(15px,2vw,17px);color:var(--muted);margin-bottom:48px">
      Open to frontend engineering roles in Munich or remote — available on one month's notice.
    </p>

    <form v-if="status !== 'sent'" style="display:flex;flex-direction:column;gap:20px" @submit.prevent="onSubmit">
      <label>
        <div style="font-size:14px;color:var(--green);margin-bottom:8px">--name</div>
        <input v-model="form.name" type="text" required placeholder="Your name" class="field" />
      </label>
      <label>
        <div style="font-size:14px;color:var(--green);margin-bottom:8px">--email</div>
        <input v-model="form.email" type="email" required placeholder="you@example.com" class="field" />
      </label>
      <label>
        <div style="font-size:14px;color:var(--green);margin-bottom:8px">--message</div>
        <textarea v-model="form.message" required placeholder="Tell me about the project..." class="field" style="height:120px;resize:vertical" />
      </label>

      <!-- Honeypot: hidden from people, tempting to bots. Never filled in by a real visitor. -->
      <input
        v-model="form.website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true"
        style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0"
      />

      <button
        type="submit" class="btn btn-primary"
        :disabled="status === 'sending'"
        style="width:fit-content;margin-top:8px;border:none"
        :style="status === 'sending' ? 'opacity:.6;cursor:wait' : ''"
      >
        {{ status === 'sending' ? './submit --sending' : './submit' }}
      </button>

      <p v-if="status === 'error'" role="alert" style="font-size:15px;color:#ff7b72;margin:0">
        {{ error }} Reach me at <a :href="`mailto:${EMAIL}`" style="color:var(--blue)">{{ EMAIL }}</a>.
      </p>
    </form>
    <p v-else role="status" style="font-size:17px;color:var(--green)">Thanks — message sent. I'll reply within a couple of days.</p>

    <div style="display:flex;flex-wrap:wrap;gap:14px 24px;margin-top:56px;font-size:15px;color:var(--muted);word-break:break-word">
      <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
      <a href="https://linkedin.com/in/bolaji-daniels-ilori" target="_blank">LinkedIn</a>
      <a href="#" target="_blank">GitHub</a>
      <a href="#" target="_blank">X</a>
    </div>
  </div>
</template>

<style scoped>
.field {
  width: 100%; border: 1px solid var(--border-input); border-radius: 6px;
  padding: 14px 16px; background: var(--panel); font-size: 16px; color: var(--text);
  font-family: inherit;
}
.field::placeholder { color: var(--muted); }
</style>
