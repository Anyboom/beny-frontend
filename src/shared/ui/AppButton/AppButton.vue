<script setup lang="ts">
  interface Props {
    disabled?: boolean;
    href?: string;
    target?: "_blank" | "_parent" | "_top" | "_self";
  }

  const { disabled = false, href = undefined, target = undefined } = defineProps<Props>();

  const emit = defineEmits<{
    click: [];
  }>();

  function handleClick() {
    if (disabled) {
      return;
    }

    emit("click");
  }

  const tag = href ? "a" : "button";
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :target="target"
    class="app-button"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-button {
    display: inline-block;
    text-transform: uppercase;
    border-radius: core.$spacing-1;
    background: core.$color-accent;
    transition: core.$transition-default;
    padding: core.$spacing-1 * 1.5 core.$spacing-3;

    color: core.$color-default-white;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    @include mixins.apply-text("button");

    @include mixins.hover {
      &:not(:disabled) {
        background: core.$color-accent-hover;
      }
    }
  }
</style>
