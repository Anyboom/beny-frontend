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
  @use "~/shared/assets/styles/mixins" as *;
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/typography" as *;

  .app-button {
    display: inline-block;
    text-transform: uppercase;
    border-radius: $spacing-1;
    background: $color-accent;
    transition: $transition-default;
    padding: $spacing-1 * 1.5 $spacing-3;

    color: $color-default-white;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    @include apply-text("button");

    @include hover {
      &:not(:disabled) {
        background: $color-accent-hover;
      }
    }
  }
</style>
