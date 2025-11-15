<script setup lang="ts"></script>

<template>
  <details class="app-accordion">
    <summary class="app-accordion__summary">
      <span class="app-accordion__title">
        <slot name="title"></slot>
      </span>
    </summary>
    <div class="app-accordion__content">
      <slot></slot>
    </div>
  </details>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/mixins" as *;

  .app-accordion {
    &[open] > &__summary {
      background: $color-default-white-hover;
    }

    &__title {
      font-weight: 500;
      color: $color-text;
    }

    &__summary {
      background: $color-default-white;
      padding: $spacing-3 $spacing-2;
      border-radius: $spacing-2;
      list-style: none;
      cursor: pointer;
      user-select: none;
      transition: $transition-default;

      @include hover {
        background: $color-default-white-hover;
      }
    }

    &__content {
      background: $color-default-white;
      padding: $spacing-3 $spacing-2;
      border-radius: $spacing-2;
      margin-top: $spacing-1;

      font-size: 14px;
      color: $color-text;
    }
  }
</style>
