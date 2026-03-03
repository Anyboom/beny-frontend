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
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-input {
    background: core.$color-default-white;
    color: core.$color-text;
    border-radius: core.$spacing-1;
    padding: core.$spacing-2;
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
      @include mixins.apply-text("caption-small");
      color: core.$color-placeholder;
    }
  }
</style>
