<script setup lang="ts"></script>

<template>
  <input
    class="app-input"
    type="text"
  />
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;

  .app-input {
    background: $color-default-white;
    color: $color-text;
    font-size: 12px;
    border-radius: $spacing-1;
    padding: $spacing-2;

    &:focus {
      outline: 2px solid $color-accent;
    }

    &::placeholder {
      color: $color-placeholder;
    }
  }
</style>
