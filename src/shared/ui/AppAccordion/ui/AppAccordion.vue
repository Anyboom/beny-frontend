<script setup lang="ts"></script>

<template>
  <details class="accordion">
    <summary class="accordion__summary">
      <span class="accordion__title">
        <slot name="title" />
      </span>
    </summary>
    <div class="accordion__content">
      <slot />
    </div>
  </details>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .accordion {
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
