<script setup lang="ts">
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";
  import { AppButton } from "~/shared/ui/AppButton";
  import { useAsyncData } from "#app";
  import { type CompetitionEntity, getCompetitionsApi } from "~/entities/competition";
  import { getTeamsApi, type TeamEntity } from "~/entities/team";
  import { type ForecastEntity, getForecastsApi } from "~/entities/forecast";
  import { AppSelect } from "~/shared/ui/AppSelect";
  import { reactive, ref, watchOnce } from "#imports";
  import FullStatsFiltersSkeleton from "~/widgets/full-stats/ui/FullStatsFiltersSkeleton.vue";
  import { set } from "@vueuse/core";

  const { data, status } = await useAsyncData(
    () => Promise.all([getTeamsApi(), getCompetitionsApi(), getForecastsApi()]),
    {
      server: false,
    },
  );

  const teams = ref<TeamEntity[]>([]);
  const competitions = ref<CompetitionEntity[]>([]);
  const forecasts = ref<ForecastEntity[]>([]);

  watchOnce(data, () => {
    if (data.value === undefined) {
      return;
    }

    set(teams, data.value.at(0) || []);
    set(competitions, data.value.at(1) || []);
    set(forecasts, data.value.at(2) || []);
  });

  const filters = reactive({
    homeTeam: undefined,
    guestTeam: undefined,
    competition: undefined,
    forecasts: undefined,
  });
</script>

<template>
  <div
    v-show="status == 'success'"
    class="full-stats-filters"
  >
    <label class="full-stats-filters__label">
      Домашняя команда
      <AppSelect
        v-model="filters.homeTeam"
        :options="teams"
        data-key="id"
        option-label="name"
      />
    </label>
    <label class="full-stats-filters__label">
      Гостевая команда
      <AppSelect
        v-model="filters.guestTeam"
        :options="teams"
        data-key="id"
        option-label="name"
      />
    </label>
    <label class="full-stats-filters__label">
      Соревнование
      <AppSelect
        v-model="filters.competition"
        :options="competitions"
        data-key="id"
        option-label="name"
      />
    </label>
    <label class="full-stats-filters__label">
      Прогноз
      <AppSelect
        v-model="filters.forecasts"
        :options="forecasts"
        data-key="id"
        option-label="name"
      />
    </label>
    <div>
      <AppCheckbox label="Выигрыш" />
      <AppCheckbox label="Прогрыш" />
      <AppCheckbox label="Возврат" />
      <AppCheckbox label="Ожидание" />
    </div>
    <AppButton>Обновить</AppButton>
  </div>

  <FullStatsFiltersSkeleton v-show="['idle', 'pending'].includes(status)" />
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
