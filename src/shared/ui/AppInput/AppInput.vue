<script setup lang="ts">
  const model = defineModel<string>();
</script>

<template>
  <input
    v-model="model"
    class="app-input"
    type="text"
  />
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/mixins" as *;
  @use "~/shared/assets/styles/typography" as *;

  .app-input {
    background: $color-default-white;
    color: $color-text;
    border-radius: $spacing-1;
    padding: $spacing-2;
    border: 2px solid transparent;
    transition: border $transition-default;

    @include apply-text("input");

    @include hover {
      border: 2px solid $color-default-border-hover;
    }

    &:focus {
      border: 2px solid $color-accent;
    }

    &::placeholder {
      @include apply-text("caption-small");
      color: $color-placeholder;
    }
  }
</style>
