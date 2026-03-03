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
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";

  .not-loaded {
    margin: core.$spacing-4 0;

    &__wrapper {
      background: core.$color-default-white;
      border-radius: core.$spacing-2;
      padding: core.$spacing-2;

      @include mixins.apply-text("body");

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
