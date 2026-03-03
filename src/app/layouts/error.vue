<script setup lang="ts"></script>

<template>
  <div class="error-layout">
    <div class="error-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";

  body {
    :has(.error-layout) {
      background: core.$color-accent;
    }
  }

  .error-layout {
    height: 100dvh;
    padding: core.$spacing-2;
    background: core.$color-accent;

    &__wrapper {
      background: core.$color-whisper;
      border-radius: core.$spacing-3;
      padding: 0 core.$spacing-3;
      overflow: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @include mixins.view-port-sm {
        border-radius: 0;
        padding: 0 core.$spacing-1;
      }
    }

    @include mixins.view-port-sm {
      padding: 0;
    }
  }
</style>
