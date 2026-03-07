<script setup lang="ts">
  import { AppPaginator, AppPaginatorSkeleton } from "~/shared/ui/AppPaginator";
  import FullStatsFilters from "./FullStatsFilters.vue";
  import FullStatsCards from "~/widgets/full-stats/ui/FullStatsCards.vue";
  import { useFullStatsBets } from "~/widgets/full-stats/model/use-full-stats-bets";
  import FullStatsCardsSkeleton from "~/widgets/full-stats/ui/FullStatsCardsSkeleton.vue";
  import { AppEmptyState } from "~/shared/ui/AppEmptyState";
  import { AppButton } from "~/shared/ui/AppButton";
  import { useFullStatsFilters } from "~/widgets/full-stats/model/use-full-stats-filters";
  import { useFullStatsSyncQuery } from "~/widgets/full-stats/model/use-full-stats-sync-query";
  import { computed } from "#imports";
  import type { BetEntity } from "~/entities/bet";

  const { page, itemsPerPage, total, updatePage, statusOfTotal, statusOfBets, bets, updateFilters } =
    useFullStatsBets();

  const { resetFilters } = useFullStatsFilters();

  function clearFilters() {
    updateFilters({});
    resetFilters();
    updatePage(1);
  }

  useFullStatsSyncQuery();

  const isBetsExist = computed(() => Boolean(bets.value && bets.value.length > 0));
  const isBetsEmpty = computed(() => !isBetsExist.value);
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>
        <div class="full-stats__layout">
          <div class="full-stats__content">
            <FullStatsCards
              v-if="isBetsExist && ['success'].includes(statusOfBets)"
              :bets="bets as BetEntity[]"
            />

            <FullStatsCardsSkeleton v-if="['pending'].includes(statusOfBets)" />

            <AppEmptyState v-show="isBetsEmpty && ['success'].includes(statusOfBets)">
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
          v-if="['success'].includes(statusOfTotal) && isBetsExist && total"
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
  @use "~/shared/assets/styles/core";
  @use "@/shared/assets/styles/mixins";

  .full-stats {
    margin-bottom: core.$spacing-8;

    &__title {
      @include mixins.apply-text("heading-2");
      color: core.$color-text;
      margin-bottom: core.$spacing-2;
    }

    &__layout {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: core.$spacing-6;
    }
  }
</style>
