<script setup lang="ts">
  import { BetCard, type BetEntity } from "~/entities/bet";

  interface Props {
    bets: BetEntity[];
  }

  defineProps<Props>();
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: $spacing-2;
    align-content: start;
  }
</style>
