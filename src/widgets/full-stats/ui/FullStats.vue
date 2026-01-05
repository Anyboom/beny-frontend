<script setup lang="ts">
  import { AppPaginator, AppPaginatorSkeleton } from "~/shared/ui/AppPaginator";
  import FullStatsFilters from "./FullStatsFilters.vue";
  import FullStatsCards from "~/widgets/full-stats/ui/FullStatsCards.vue";
  import { useFullStats } from "~/widgets/full-stats/model/use-full-stats";
  import FullStatsCardsSkeleton from "~/widgets/full-stats/ui/FullStatsCardsSkeleton.vue";

  const { currentPage, itemsPerPage, total, changePage, statusOfTotal, statusOfBets } = useFullStats();
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>

        <div class="full-stats__layout">
          <FullStatsCards v-show="['success'].includes(statusOfBets)" />

          <FullStatsCardsSkeleton v-show="['loading', 'pending'].includes(statusOfBets)" />

          <FullStatsFilters />
        </div>

        <AppPaginator
          v-show="['success'].includes(statusOfTotal)"
          :current-page="currentPage"
          :total-items="total"
          :items-per-page="itemsPerPage"
          @page-changed="changePage"
        />

        <AppPaginatorSkeleton v-show="['loading', 'pending'].includes(statusOfTotal)" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .full-stats {
    margin-bottom: $spacing-8;

    &__title {
      @include apply-text("heading-2");
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__layout {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: $spacing-6;
    }
  }
</style>
