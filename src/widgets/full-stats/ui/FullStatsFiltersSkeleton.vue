<script setup lang="ts">
  import { AppSelectSkeleton } from "~/shared/ui/AppSelect";
  import { AppCheckboxSkeleton } from "~/shared/ui/AppCheckbox";
  import { AppButtonSkeleton } from "~/shared/ui/AppButton";
</script>

<template>
  <div class="full-stats-filters-skeleton">
    <label class="full-stats-filters-skeleton__label">
      Домашняя команда
      <AppSelectSkeleton />
    </label>
    <label class="full-stats-filters-skeleton__label">
      Гостевая команда
      <AppSelectSkeleton />
    </label>
    <label class="full-stats-filters-skeleton__label">
      Соревнование
      <AppSelectSkeleton />
    </label>
    <label class="full-stats-filters-skeleton__label">
      Прогноз
      <AppSelectSkeleton />
    </label>
    <div>
      <AppCheckboxSkeleton />
      <AppCheckboxSkeleton />
      <AppCheckboxSkeleton />
      <AppCheckboxSkeleton />
    </div>
    <AppButtonSkeleton />
  </div>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .full-stats-filters-skeleton {
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
