<script setup lang="ts">
  import { BetCard, type BetEntity } from "~/entities/bet";
  import { AppInput } from "~/shared/ui/AppInput";
  import { AppButton } from "~/shared/ui/AppButton";
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";
  import { AppSelect } from "~/shared/ui/AppSelect";
  import { ref } from "vue";
  import { AppPaginator } from "~/shared/ui/AppPaginator";
  import { computed } from "#imports";

  const items: BetEntity[] = [
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия1",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 2,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия2",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 3,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия3",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 4,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия4",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 5,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия5",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 6,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия6",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 7,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия7",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 8,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия8",
      forecast: "ИТБ 1 ( 1.5 )",
    },
  ];

  const selectedItem = ref<BetEntity>(items[0]!);

  const currentPage = ref(1);
  const itemsPerPage = 9;
  const totalItems = ref(items.length); // Обычно приходит с бэкенда

  const allData = ref(items);

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return allData.value.slice(start, end);
  });

  const handlePageChange = (page: any) => {
    currentPage.value = page;
  };
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>
        <div class="full-stats__layout">
          <div class="full-stats__cards">
            <BetCard
              v-for="item of paginatedData"
              v-bind="item"
              :key="item.id"
            />
          </div>
          <div class="full-stats__filters">
            <label>
              Домашная команда
              <AppSelect
                v-model="selectedItem"
                :options="items"
                data-key="id"
                option-label="homeTeam"
              />
            </label>
            <label>
              Гостевая команда
              <AppInput />
            </label>
            <label>
              Соревнование
              <AppInput />
            </label>
            <label>
              Коэффициент
              <AppInput />
            </label>
            <label>
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
      @include heading-h2;
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
