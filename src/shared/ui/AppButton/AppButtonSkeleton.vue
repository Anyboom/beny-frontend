<script setup lang="ts">
  import { AppSkeleton } from "~/shared/ui/AppSkeleton";
</script>

<template>
  <AppSkeleton class="app-button-skeleton" />
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/variables" as *;

  .app-button-skeleton {
    height: 45px !important;
    border-radius: $spacing-1;
  }
</style>
