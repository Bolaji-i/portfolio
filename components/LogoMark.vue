<script setup lang="ts">
/**
 * Block B — the site logo. A filled terminal block cursor with the B knocked out.
 *
 * Inherits `currentColor`, so it recolors with whatever it sits inside (the nav
 * brand turns green on hover and the mark follows). The knockout is transparent
 * rather than filled with the background, so it works on any surface.
 *
 * The mask id is namespaced because SVG ids are document-global — two of these on
 * one page would otherwise fight over `#cut`.
 */
const props = withDefaults(defineProps<{ size?: number | string }>(), { size: 26 })

const uid = useId()
const maskId = computed(() => `logo-cut-${uid}`)
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 32 32"
    fill="none"
    role="img"
    aria-label="Bolaji Daniels Ilori"
    class="logo-mark"
  >
    <mask :id="maskId">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#fff" />
      <g fill="none" stroke="#000" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 8.5V23.5" />
        <path d="M11 8.5H15.5L20.5 12.5L15.5 16H11" />
        <path d="M11 16H15.5L20.5 20L15.5 23.5H11" />
      </g>
    </mask>
    <rect x="1" y="1" width="30" height="30" rx="7" fill="currentColor" :mask="`url(#${maskId})`" />
  </svg>
</template>

<style scoped>
.logo-mark { display: block; flex: none; }
</style>
