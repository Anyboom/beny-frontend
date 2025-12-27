<script setup lang="ts">
  import { BetCard, getTotalBetsApi, useGetBetsApi } from "~/entities/bet";
  import { AppInput } from "~/shared/ui/AppInput";
  import { AppButton } from "~/shared/ui/AppButton";
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";
  import { onMounted, ref, watch } from "vue";
  import { AppPaginator } from "~/shared/ui/AppPaginator";
  import { computed } from "#imports";
  import { useRouteQuery } from "@vueuse/router";

  const currentPage = useRouteQuery("page", 1, { transform: Number });
  const totalItems = ref(0);
  const itemsPerPage = 9;

  const parameters = computed(() => ({
    fields: "*.*",
    limit: itemsPerPage,
    sort: "-date_updated",
    page: currentPage.value,
  }));

  const { data, refresh } = await useGetBetsApi(parameters);

  onMounted(async () => {
    totalItems.value = await getTotalBetsApi();
  });

  function handlePageChange(page: number) {
    currentPage.value = page;
  }

  watch(currentPage, () => refresh());
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>
        <div class="full-stats__layout">
          <div class="full-stats__cards">
            <BetCard
              v-for="item of data"
              v-bind="item"
              :key="item.id"
            />
          </div>
          <div class="full-stats__filters">
            <label class="full-stats__label">
              Гостевая команда
              <AppInput />
            </label>
            <label class="full-stats__label">
              Соревнование
              <AppInput />
            </label>
            <label class="full-stats__label">
              Коэффициент
              <AppInput />
            </label>
            <label class="full-stats__label">
              Коэффициент
              <AppInput />
            </label>
            <div>
              <AppCheckbox label="Выигрыш" />
              <AppCheckbox label="Прогрыш" />
              <AppCheckbox label="Возврат" />
              <AppCheckbox label="Ожидание" />
            </div>
            <AppButton>Обновить</AppButton>
          </div>
        </div>
        <AppPaginator
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

    &__label {
      @include apply-text("label");
      color: $color-text;
      display: flex;
      flex-direction: column;
      gap: $spacing-1;
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

    &__filters {
      display: flex;
      flex-direction: column;

      gap: $spacing-2;

      input {
        width: 100%;
      }
    }
  }
</style>
