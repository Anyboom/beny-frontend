<script setup lang="ts">
  defineProps<{
    collection: string;
  }>();
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
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/typography" as *;

  .not-loaded {
    margin: $spacing-4 0;

    &__wrapper {
      background: $color-default-white;
      border-radius: $spacing-2;
      padding: $spacing-2;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
