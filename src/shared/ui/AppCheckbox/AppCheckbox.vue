<script setup lang="ts">
  interface Props {
    label?: string;
    disabled?: boolean;
  }

  const { label = undefined, disabled = undefined } = defineProps<Props>();

  const model = defineModel<boolean>();
</script>

<template>
  <label
    class="app-checkbox"
    :class="{ 'disabled': disabled }"
  >
    <input
      v-model="model"
      type="checkbox"
      class="app-checkbox__input"
      :disabled="disabled"
    />
    <span class="app-checkbox__checkmark"></span>
    <span class="app-checkbox__label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-checkbox {
    $this: &;

    display: flex;
    align-items: center;
    cursor: pointer;
    padding: core.$spacing-1 0;
    user-select: none;

    &__input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:disabled:checked + #{$this}__checkmark {
        background-color: #ccc;
        border-color: #ccc;
      }

      &:checked + #{$this}__checkmark {
        background-color: core.$color-accent;
        border-color: core.$color-accent;

        &:after {
          content: "";
          position: absolute;
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }

    &__label {
      @include mixins.apply-text("label");
      color: #333;
    }

    &__checkmark {
      position: relative;
      height: 20px;
      width: 20px;
      background-color: #fff;
      border: 2px solid #ddd;
      border-radius: 4px;
      margin-right: 8px;
      transition: all core.$transition-default;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    @include mixins.hover {
      &:not(.disabled) #{$this}__checkmark {
        border-color: core.$color-accent;
      }
    }
  }
</style>
