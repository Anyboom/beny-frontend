<script setup lang="ts">
  import { AppSkeleton } from "~/shared/ui/AppSkeleton";
</script>

<template>
  <AppSkeleton class="app-button-skeleton" />
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/core";

  .app-button-skeleton {
    height: 45px !important;
    border-radius: core.$spacing-1;
  }
</style>
