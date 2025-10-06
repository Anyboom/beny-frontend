<script setup lang="ts">
  import { BetCard, type BetEntity } from "~/entities/bet";
  import { AppButton } from "~/shared/ui/AppButton";

  const items: BetEntity[] = [
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "return",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "lose",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "pending",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "win",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "return",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "lose",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
    {
      id: "1",
      coefficient: "1, 85",
      competition: "Лига Наций",
      startedAt: "22:00 | 4 июня 2025",
      status: "pending",
      guestTeam: "Германия",
      homeTeam: "Россия",
      forecast: "ИТБ 1 ( 1.5 )",
    },
  ];
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section
    id="half-stats"
    class="half-stats"
  >
    <div class="container">
      <div class="half-stats__wrapper">
        <h2 class="half-stats__title">Статистика</h2>
        <div class="half-stats__items">
          <BetCard
            v-for="item in items"
            :key="item.competition"
            :data="item"
          />
        </div>
        <div class="half-stats__buttons">
          <AppButton>Подробнее</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .half-stats {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: $spacing-2;
      margin-bottom: $spacing-2;

      @include view-port-md {
        grid-template-columns: repeat(3, 1fr);
      }

      @include view-port-sm {
        grid-template-columns: repeat(2, 1fr);
      }

      @include view-port-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__buttons {
      text-align: center;
    }
  }
</style>
