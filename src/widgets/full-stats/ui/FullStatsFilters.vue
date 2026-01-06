<script setup lang="ts">
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";
  import { AppButton } from "~/shared/ui/AppButton";
  import { AppSelect } from "~/shared/ui/AppSelect";
  import { storeToRefs } from "#imports";
  import FullStatsFiltersSkeleton from "~/widgets/full-stats/ui/FullStatsFiltersSkeleton.vue";
  import { useFullStatsFiltersStore } from "~/widgets/full-stats/model/full-stats-filters.store";
  import { useFullStatsFilters } from "~/widgets/full-stats/model/use-full-stats-filters";
  import { useFullStatsBets } from "~/widgets/full-stats/model/use-full-stats-bets";

  const fullStatsStore = useFullStatsFiltersStore();

  const { filters, serializedFilters } = storeToRefs(fullStatsStore);

  const { teams, forecasts, competitions, isLoading, isLoaded } = useFullStatsFilters();

  const { applyFilters } = useFullStatsBets();
</script>

<template>
  <div
    v-show="isLoaded"
    class="full-stats-filters"
  >
    <label class="full-stats-filters__label">
      Домашняя команда
      <AppSelect
        v-model="filters.homeTeam"
        :options="teams"
        data-key="id"
        option-label="name"
        show-clear
      />
    </label>
    <label class="full-stats-filters__label">
      Гостевая команда
      <AppSelect
        v-model="filters.guestTeam"
        :options="teams"
        data-key="id"
        option-label="name"
        show-clear
      />
    </label>
    <label class="full-stats-filters__label">
      Соревнование
      <AppSelect
        v-model="filters.competition"
        :options="competitions"
        data-key="id"
        option-label="name"
        show-clear
      />
    </label>
    <label class="full-stats-filters__label">
      Прогноз
      <AppSelect
        v-model="filters.forecasts"
        :options="forecasts"
        data-key="id"
        option-label="name"
        show-clear
      />
    </label>
    <div>
      <AppCheckbox label="Выигрыш" />
      <AppCheckbox label="Прогрыш" />
      <AppCheckbox label="Возврат" />
      <AppCheckbox label="Ожидание" />
    </div>
    <AppButton @click="applyFilters(serializedFilters)">Обновить</AppButton>
  </div>

  <FullStatsFiltersSkeleton v-show="isLoading" />
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .full-stats-filters {
    display: flex;
    flex-direction: column;
    gap: $spacing-2;

    &__label {
      @include apply-text("label");
      color: $color-text;
      display: flex;
      flex-direction: column;
      gap: $spacing-1;
    }
  }
</style>
