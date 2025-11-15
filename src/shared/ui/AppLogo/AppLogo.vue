<script setup lang="ts"></script>

<template>
  <div class="app-logo">
    <svg
      class="app-logo__icon"
      viewBox="0 0 43 45"
      width="43"
      height="45"
    >
      <use href="@/shared/assets/images/sprites.svg#logo" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/mixins" as *;

  .app-logo {
    background: $color-accent;
    padding: $spacing-1;
    border-radius: $spacing-2;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition-default;

    &__icon {
      width: 100%;
      height: 100%;
      fill: $color-default-white;
    }

    @include hover {
      background: $color-accent-hover;
    }
  }
</style>
