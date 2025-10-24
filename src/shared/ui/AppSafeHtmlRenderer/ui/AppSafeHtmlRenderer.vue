<script lang="ts" setup>
  import DOMPurify from "dompurify";
  import { computed } from "#imports";

  interface AppSafeHtmlRenderer {
    html: string;
  }

  const { html } = defineProps<AppSafeHtmlRenderer>();

  const sanitizedHtml = computed(() => {
    return DOMPurify.sanitize(html, {
      ALLOW_DATA_ATTR: false,
    });
  });
</script>

<template>
  <div
    class="app-safe-html-renderer"
    v-html="sanitizedHtml"
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
