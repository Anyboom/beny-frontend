<script setup lang="ts"></script>

<template>
  <details class="app-accordion">
    <summary class="app-accordion__summary">
      <span class="app-accordion__title">
        <slot name="title"></slot>
      </span>
      <Icon
        class="app-accordion__icon"
        name="charm:chevron-down"
        size="20"
      />
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
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      border-top: 2px solid $color-accent;
      border-left: 2px solid $color-accent;
      border-right: 2px solid $color-accent;
      border-bottom: 2px solid transparent;
    }

    &[open] &__icon {
      transform: rotate(180deg);
    }

    &__icon {
      transition: transform $transition-default;
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
      border: 2px solid transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      background: $color-default-white;
      padding: $spacing-3 $spacing-2;

      font-size: 14px;
      color: $color-text;

      margin-top: -2px;
      border-radius: 0 0 $spacing-2 $spacing-2;

      border-bottom: 2px solid $color-accent;
      border-left: 2px solid $color-accent;
      border-right: 2px solid $color-accent;
    }
  }
</style>
