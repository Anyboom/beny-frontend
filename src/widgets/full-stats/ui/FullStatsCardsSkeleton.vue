<script setup lang="ts">
  import { BetCardSkeleton } from "~/entities/bet";
</script>

<template>
  <div class="full-stats-cards-filters">
    <BetCardSkeleton
      v-for="index in 9"
      :key="index"
    />
  </div>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/variables" as *;

  .full-stats-cards-filters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-2;
    align-content: start;
  }
</style>
