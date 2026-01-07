<script setup lang="ts">
  interface Props {
    collection: string;
  }

  defineProps<Props>();
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section class="not-loaded">
    <div class="container">
      <div class="not-loaded__wrapper">Не удалось загрузить блок: {{ collection }}</div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/typography" as *;

  .not-loaded {
    margin: $spacing-4 0;

    &__wrapper {
      background: $color-default-white;
      border-radius: $spacing-2;
      padding: $spacing-2;

      @include apply-text("body");

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
