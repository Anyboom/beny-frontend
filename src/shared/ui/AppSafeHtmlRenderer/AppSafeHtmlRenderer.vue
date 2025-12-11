<script lang="ts" setup>
  import DOMPurify from "isomorphic-dompurify";
  import { computed } from "#imports";

  interface AppSafeHtmlRendererProps {
    html: string;
  }

  const { html } = defineProps<AppSafeHtmlRendererProps>();

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
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/typography" as *;

  .app-safe-html-renderer {
    p {
      color: $color-text;

      @include apply-text("body");

      &:not(:last-of-type) {
        margin-bottom: $spacing-2;
      }
    }
  }
</style>
