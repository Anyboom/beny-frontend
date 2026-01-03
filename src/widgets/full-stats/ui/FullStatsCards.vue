<script setup lang="ts">
  import { BetCard } from "~/entities/bet";
  import { useFullStats } from "~/widgets/full-stats/model/use-full-stats";

  const { bets } = useFullStats();
</script>

<template>
  <div class="full-stats-cards">
    <BetCard
      v-for="item of bets"
      v-bind="item"
      :key="item.id"
    />
  </div>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/variables" as *;

  .full-stats-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-2;
    align-content: start;
  }
</style>
