<script lang="ts" setup>
  import DOMPurify from "isomorphic-dompurify";
  import { computed } from "#imports";

  interface Props {
    html: string;
  }

  const { html } = defineProps<Props>();

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
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-safe-html-renderer {
    p {
      color: core.$color-text;

      @include mixins.apply-text("body");

      &:not(:last-of-type) {
        margin-bottom: core.$spacing-2;
      }
    }
  }
</style>
