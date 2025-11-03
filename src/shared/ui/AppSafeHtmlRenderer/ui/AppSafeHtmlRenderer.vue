<script lang="ts" setup>
  interface AppSafeHtmlRendererProps {
    html: string;
  }

  const { html } = defineProps<AppSafeHtmlRendererProps>();
</script>

<template>
  <div
    v-dompurify-html="html"
    class="app-safe-html-renderer"
  ></div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/variables" as *;

  .app-safe-html-renderer {
    p {
      color: $color-text;

      &:not(:last-of-type) {
        margin-bottom: $spacing-2;
      }
    }
  }
</style>
