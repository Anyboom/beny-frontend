<script setup lang="ts">
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";
  import { AppButton } from "~/shared/ui/AppButton";
  import { AppSelect } from "~/shared/ui/AppSelect";
  import FullStatsFiltersSkeleton from "~/widgets/full-stats/ui/FullStatsFiltersSkeleton.vue";
  import { useFullStatsFilters } from "~/widgets/full-stats/model/use-full-stats-filters";
  import { useFullStatsBets } from "~/widgets/full-stats/model/use-full-stats-bets";
  import { useCloned } from "#imports";

  const { teams, forecasts, competitions, isLoading, isLoaded, filters, serializedFilters, updateFilters } =
    useFullStatsFilters();

  const { updateFilters: updateFiltersForBets, updatePage } = useFullStatsBets();

  const { cloned: localFilters, isModified } = useCloned(filters);

  function applyFilters() {
    updateFilters(localFilters.value);
    updatePage(1);
    updateFiltersForBets(serializedFilters.value);
  }
</script>

<template>
  <div
    v-show="isLoaded"
    class="full-stats-filters"
  >
    <label class="full-stats-filters__label">
      Домашняя команда
      <AppSelect
        v-model="localFilters.homeTeam"
        :options="teams"
        option-key="id"
        option-label="name"
        show-clear
        show-search
      />
    </label>
    <label class="full-stats-filters__label">
      Гостевая команда
      <AppSelect
        v-model="localFilters.guestTeam"
        :options="teams"
        option-key="id"
        option-label="name"
        show-clear
        show-search
      />
    </label>
    <label class="full-stats-filters__label">
      Соревнование
      <AppSelect
        v-model="localFilters.competition"
        :options="competitions"
        option-key="id"
        option-label="name"
        show-clear
        show-search
      />
    </label>
    <label class="full-stats-filters__label">
      Прогноз
      <AppSelect
        v-model="localFilters.forecasts"
        :options="forecasts"
        option-key="id"
        option-label="name"
        show-clear
        show-search
      />
    </label>
    <div>
      <AppCheckbox
        v-model="localFilters.statuses.win"
        label="Выигрыш"
      />
      <AppCheckbox
        v-model="localFilters.statuses.lose"
        label="Прогрыш"
      />
      <AppCheckbox
        v-model="localFilters.statuses.return"
        label="Возврат"
      />
      <AppCheckbox
        v-model="localFilters.statuses.pending"
        label="Ожидание"
      />
    </div>
    <AppButton
      :disabled="!isModified"
      @click="applyFilters"
    >
      Обновить
    </AppButton>
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
