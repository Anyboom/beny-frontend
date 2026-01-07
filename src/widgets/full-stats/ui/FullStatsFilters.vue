<script setup lang="ts">
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";
  import { AppButton } from "~/shared/ui/AppButton";
  import { AppSelect } from "~/shared/ui/AppSelect";
  import FullStatsFiltersSkeleton from "~/widgets/full-stats/ui/FullStatsFiltersSkeleton.vue";
  import { useFullStatsFilters } from "~/widgets/full-stats/model/use-full-stats-filters";
  import { useFullStatsBets } from "~/widgets/full-stats/model/use-full-stats-bets";
  import { ref, watch } from "vue";

  const { teams, forecasts, competitions, isLoading, isLoaded, filters, serializedFilters } = useFullStatsFilters();

  const { updateFilters } = useFullStatsBets();

  const isButtonDisabled = ref<boolean>(true);

  function disableSaveButton() {
    isButtonDisabled.value = true;
  }

  function enableSaveButton() {
    isButtonDisabled.value = false;
  }

  function saveFilters() {
    updateFilters(serializedFilters.value);
    disableSaveButton();
  }

  watch(serializedFilters, enableSaveButton);
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
        option-key="id"
        option-label="name"
        show-clear
        show-search
      />
    </label>
    <label class="full-stats-filters__label">
      Гостевая команда
      <AppSelect
        v-model="filters.guestTeam"
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
        v-model="filters.competition"
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
        v-model="filters.forecasts"
        :options="forecasts"
        option-key="id"
        option-label="name"
        show-clear
        show-search
      />
    </label>
    <div>
      <AppCheckbox
        v-model="filters.statuses.win"
        label="Выигрыш"
      />
      <AppCheckbox
        v-model="filters.statuses.lose"
        label="Прогрыш"
      />
      <AppCheckbox
        v-model="filters.statuses.return"
        label="Возврат"
      />
      <AppCheckbox
        v-model="filters.statuses.pending"
        label="Ожидание"
      />
    </div>
    <AppButton
      :disabled="isButtonDisabled"
      @click="saveFilters"
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
