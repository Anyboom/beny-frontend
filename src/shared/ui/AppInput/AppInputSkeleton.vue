<script setup lang="ts">
  import { AppSkeleton } from "~/shared/ui/AppSkeleton";
</script>

<template>
  <AppSkeleton class="app-input-skeleton" />
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/core";

  .app-input-skeleton {
    height: 56px !important;
    border-radius: core.$spacing-1;
  }
</style>
