<script setup lang="ts">
  import { AppPaginator, AppPaginatorSkeleton } from "~/shared/ui/AppPaginator";
  import FullStatsFilters from "./FullStatsFilters.vue";
  import FullStatsCards from "~/widgets/full-stats/ui/FullStatsCards.vue";
  import { useFullStatsBets } from "~/widgets/full-stats/model/use-full-stats-bets";
  import FullStatsCardsSkeleton from "~/widgets/full-stats/ui/FullStatsCardsSkeleton.vue";
  import { AppEmptyState } from "~/shared/ui/AppEmptyState";
  import { AppButton } from "~/shared/ui/AppButton";
  import { useFullStatsFilters } from "~/widgets/full-stats/model/use-full-stats-filters";

  const { page, itemsPerPage, total, updatePage, statusOfTotal, statusOfBets, bets, updateFilters } =
    useFullStatsBets();

  const { resetFilters } = useFullStatsFilters();

  function clearFilters() {
    updateFilters({});
    resetFilters();
    updatePage(1);
  }
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>
        <div class="full-stats__layout">
          <div class="full-stats__content">
            <FullStatsCards
              v-show="['success'].includes(statusOfBets)"
              :bets="bets"
            />

            <FullStatsCardsSkeleton v-show="['pending'].includes(statusOfBets)" />

            <AppEmptyState v-show="bets.length == 0 && ['success'].includes(statusOfBets)">
              <template #actions>
                <AppButton @click="clearFilters">Сбросить фильтры</AppButton>
              </template>
            </AppEmptyState>
          </div>

          <div class="full-stats__sidebar">
            <FullStatsFilters />
          </div>
        </div>

        <AppPaginator
          v-show="['success'].includes(statusOfTotal)"
          :current-page="page"
          :total-items="total"
          :items-per-page="itemsPerPage"
          @page-changed="updatePage"
        />

        <AppPaginatorSkeleton v-show="['pending'].includes(statusOfTotal)" />
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
