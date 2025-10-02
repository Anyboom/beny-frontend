<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <div class="default-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @use "@/assets/styles/variables" as *;

  body:has(.default-layout) {
    background: $color-accent;
  }
</style>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .default-layout {
    height: 100%;
    padding: $spacing-2;
    background: $color-accent;

    &__wrapper {
      background: $color-whisper;
      border-radius: $spacing-3;
      padding: 0 $spacing-3;
      overflow: auto;

      @include view-port-sm {
        border-radius: 0;
        padding: 0 $spacing-1;
      }
    }

    @include view-port-sm {
      padding: 0;
    }
  }
</style>
