<!--
  Marks a post body as placeholder text. Used in markdown as:

    ::draft-notice
    ::

  Delete that block from a post once the real writing is in.
-->
<template>
  <p class="draft-notice">
    <strong>Draft placeholder</strong> — this body text is scaffolding, not finished writing.
    Replace it in <code>content/blog/</code>.
  </p>
</template>

<style scoped>
.draft-notice {
  border: 1px dashed var(--border-input); border-radius: 8px;
  padding: 14px 18px; margin: 0 0 32px;
  font-size: 15px; line-height: 1.6; color: var(--muted); background: var(--panel);
}
.draft-notice strong { color: var(--green); }
.draft-notice code { font-family: inherit; color: var(--blue); }
</style>
