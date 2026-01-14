<script setup lang="ts"></script>

<template>
  <div class="error-layout">
    <div class="error-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/mixins" as *;

  body {
    :has(.error-layout) {
      background: $color-accent;
    }
  }

  .error-layout {
    height: 100dvh;
    padding: $spacing-2;
    background: $color-accent;

    &__wrapper {
      background: $color-whisper;
      border-radius: $spacing-3;
      padding: 0 $spacing-3;
      overflow: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

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
