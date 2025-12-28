<script setup lang="ts">
  import { BetCard, getBetsApi, getTotalBetsApi } from "~/entities/bet";
  import { AppPaginator, AppPaginatorSkeleton } from "~/shared/ui/AppPaginator";
  import { computed } from "#imports";
  import { useRouteQuery } from "@vueuse/router";
  import FullStatsFilters from "./FullStatsFilters.vue";
  import { useAsyncData } from "#app";

  const currentPage = useRouteQuery("page", 1, { transform: Number });
  const itemsPerPage = 1;

  const parameters = computed(() => ({
    fields: "*.*",
    limit: itemsPerPage,
    sort: "-date_updated",
    page: currentPage.value,
  }));

  const pageForBets = computed(() => `bets-${currentPage.value}`);

  const { data: bets } = await useAsyncData(pageForBets, () => getBetsApi(parameters));

  const { data: totalItems, status: statusForTotalItems } = await useAsyncData(() => getTotalBetsApi(), {
    default: () => 0,
    server: false,
  });

  function handlePageChange(page: number) {
    currentPage.value = page;
  }
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>
        <div class="full-stats__layout">
          <div class="full-stats__cards">
            <BetCard
              v-for="item of bets"
              v-bind="item"
              :key="item.id"
            />
          </div>
          <FullStatsFilters />
        </div>

        <AppPaginatorSkeleton v-show="['idle', 'pending'].includes(statusForTotalItems)" />

        <AppPaginator
          v-show="['success'].includes(statusForTotalItems)"
          :current-page="currentPage"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          @page-changed="handlePageChange"
        />
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

    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-2;
      align-content: start;
    }

    &__layout {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: $spacing-6;
    }
  }
</style>
