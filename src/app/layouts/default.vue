<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <div class="default-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";

  body {
    :has(.default-layout) {
      background: core.$color-accent;
    }
  }

  .default-layout {
    height: 100%;
    padding: core.$spacing-2;
    background: core.$color-accent;

    &__wrapper {
      background: core.$color-whisper;
      border-radius: core.$spacing-3;
      padding: 0 core.$spacing-3;
      overflow: auto;

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
