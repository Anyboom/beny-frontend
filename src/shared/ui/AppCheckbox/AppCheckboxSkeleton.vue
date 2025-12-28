<script setup lang="ts">
  import { AppSkeleton } from "~/shared/ui/AppSkeleton";
</script>

<template>
  <div class="app-checkbox-skeleton">
    <AppSkeleton class="app-checkbox-skeleton__check" />
    <AppSkeleton class="app-checkbox-skeleton__text" />
  </div>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;

  .app-checkbox-skeleton {
    padding: $spacing-1 0;
    display: flex;
    gap: $spacing-1;

    &__check {
      width: 20px !important;
      height: 20px !important;

      border-radius: 4px;
    }

    &__text {
      height: 20px !important;

      border-radius: 4px;
    }
  }
</style>
