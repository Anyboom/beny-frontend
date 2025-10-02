<script setup lang="ts"></script>

<template>
  <div class="logo">
    <svg class="logo__icon" viewBox="0 0 43 45" width="43" height="45">
      <use href="@/assets/images/sprites.svg#logo"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .logo {
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
