<script setup lang="ts">
  import { BetCard, type BetEntity } from "~/entities/bet";
  import { AppInput } from "~/shared/ui/AppInput";
  import { AppButton } from "~/shared/ui/AppButton";
  import { AppCheckbox } from "~/shared/ui/AppCheckbox";

  const items: BetEntity[] = [
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: 1,
      coefficient: 1.85,
      competition: "Лига Наций",
      startedAt: new Date().toString(),
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
  ];
</script>

<template>
  <section class="full-stats">
    <div class="container">
      <div class="full-stats__wrapper">
        <h2 class="full-stats__title">Статистика</h2>
        <div class="full-stats__layout">
          <div class="full-stats__cards">
            <BetCard
              v-for="item of items"
              v-bind="item"
              :key="item.id"
            />
          </div>
          <div class="full-stats__filters">
            <label>
              Домашная команда
              <AppInput />
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
            <div>
              <AppCheckbox label="Выигрыш" />
              <AppCheckbox label="Прогрыш" />
              <AppCheckbox label="Возврат" />
              <AppCheckbox label="Ожидание" />
            </div>
            <AppButton>Обновить</AppButton>
          </div>
        </div>
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
