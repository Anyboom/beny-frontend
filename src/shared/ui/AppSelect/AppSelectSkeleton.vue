<script setup lang="ts">
  import { AppSkeleton } from "~/shared/ui/AppSkeleton";
</script>

<template>
  <AppSkeleton class="app-select-skeleton" />
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;

  .app-select-skeleton {
    height: 56px !important;
    border-radius: $spacing-1;
  }
</style>
