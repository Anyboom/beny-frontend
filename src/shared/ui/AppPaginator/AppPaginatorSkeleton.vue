<script setup lang="ts">
  import { AppSkeleton } from "~/shared/ui/AppSkeleton";
</script>

<template>
  <AppSkeleton class="app-paginator-skeleton" />
</template>

<style scoped lang="scss">
  .app-paginator-skeleton {
    width: 260px !important;
    height: 36px !important;
    border-radius: 8px;
    margin: 16px 0;
  }
</style>
