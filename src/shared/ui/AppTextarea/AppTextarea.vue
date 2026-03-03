<script setup lang="ts"></script>

<template>
  <textarea
    class="app-textarea"
    rows="15"
  ></textarea>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/core";
  @use "~/shared/assets/styles/mixins";

  .app-textarea {
    background: core.$color-default-white;
    color: core.$color-text;
    border-radius: core.$spacing-1;
    padding: core.$spacing-2;
    resize: none;
    outline: none;
    border: 2px solid transparent;

    transition: border core.$transition-default;

    @include mixins.apply-text("input");

    @include mixins.hover {
      border: 2px solid core.$color-default-border-hover;
    }

    &:focus {
      border: 2px solid core.$color-accent;
    }

    &::placeholder {
      color: core.$color-placeholder;
    }
  }
</style>
