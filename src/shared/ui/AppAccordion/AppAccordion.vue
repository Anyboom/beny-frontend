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
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";

  .app-accordion {
    &[open] > &__summary {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      border-top: 2px solid core.$color-accent;
      border-left: 2px solid core.$color-accent;
      border-right: 2px solid core.$color-accent;
      border-bottom: 2px solid transparent;
    }

    &[open] &__icon {
      transform: rotate(180deg);
    }

    &__icon {
      transition: transform core.$transition-default;
    }

    &__title {
      @include mixins.apply-text("body-small");
      color: core.$color-text;
    }

    &__summary {
      background: core.$color-default-white;
      padding: core.$spacing-3 core.$spacing-2;
      border-radius: core.$spacing-2;
      list-style: none;
      cursor: pointer;
      user-select: none;
      border: 2px solid transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      background: core.$color-default-white;
      padding: core.$spacing-3 core.$spacing-2;
      color: core.$color-text;

      margin-top: -2px;
      border-radius: 0 0 core.$spacing-2 core.$spacing-2;

      border-bottom: 2px solid core.$color-accent;
      border-left: 2px solid core.$color-accent;
      border-right: 2px solid core.$color-accent;

      @include mixins.apply-text("caption");
    }
  }
</style>
