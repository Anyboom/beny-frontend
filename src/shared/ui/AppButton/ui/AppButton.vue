<script setup lang="ts">
  import { computed } from "#imports";

  const emit = defineEmits<{
    click: [];
  }>();

  const { disabled = false, href = undefined } = defineProps<{
    disabled?: boolean;
    href?: string;
    target?: "_blank" | "_parent" | "_top" | "_self";
  }>();

  function handleClick() {
    if (disabled) {
      return;
    }

    emit("click");
  }

  const tag = computed(() => {
    return href ? "a" : "button";
  });
</script>

<template>
  <component :is="tag" :href="href" :target="target" class="button" @click="handleClick" :disabled="disabled">
    <slot />
  </component>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/mixins" as *;
  @use "@/assets/styles/variables" as *;

  .button {
    text-transform: uppercase;
    border-radius: $spacing-1;
    background: $color-accent;
    transition: $transition-default;
    padding: $spacing-1 * 1.5 $spacing-3;

    font-size: 14px;

    color: $color-default-white;
    font-weight: 600;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    @include hover {
      &:not(:disabled) {
        background: $color-accent-hover;
      }
    }
  }
</style>
