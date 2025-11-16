<script setup lang="ts"></script>

<template>
  <textarea
    class="app-textarea"
    rows="15"
  ></textarea>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/mixins" as *;

  .app-textarea {
    background: $color-default-white;
    color: $color-text;
    font-size: 12px;
    border-radius: $spacing-1;
    padding: $spacing-2;
    resize: none;
    outline: none;
    border: 2px solid $color-default-border;

    @include hover {
      border: 2px solid $color-default-border-hover;
    }

    &:focus {
      border: 2px solid $color-accent;
    }

    &::placeholder {
      color: $color-placeholder;
    }
  }
</style>
