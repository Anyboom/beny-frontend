<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
  import { BetCard, type BetEntity } from "~/entities/bet";

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
  ];
</script>

<template>
  <section class="main-banner">
    <div class="container">
      <div class="main-banner__wrapper">
        <div class="main-banner__content">
          <h1 class="main-banner__title">Команда, которая поможет в мире ставок</h1>
          <div class="main-banner__buttons">
            <app-button>Присоединиться</app-button>
          </div>
        </div>
        <div class="main-banner__cards">
          <div class="main-banner__cards-wrapper">
            <div class="main-banner__card" v-for="item in items" :key="item.competition">
              <BetCard :data="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .main-banner {
    margin-bottom: $spacing-8;
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @include view-port-md {
        display: block;
      }
    }
    &__content {
      padding: $spacing-8 * 2 0;

      @include view-port-md {
        padding: $spacing-8 0;
      }
    }
    &__title {
      font-size: 60px;
      font-weight: 700;
      color: $color-text;
      line-height: 60px;
      margin-bottom: $spacing-5;
      max-width: 540px;

      @include view-port-md {
        max-width: none;
      }
    }
    &__cards {
      display: flex;
      justify-content: right;
      align-items: center;

      @include view-port-md {
        display: none;
      }
    }
    &__cards-wrapper {
      position: relative;
      width: 280px;
      height: 370px;
    }
    &__card {
      width: 280px;
      position: absolute;
      transition: $transition-default;

      &:nth-child(1) {
        z-index: 150;
      }

      &:nth-child(2) {
        z-index: 100;
        right: 55%;
        top: 15%;
      }

      &:nth-child(3) {
        z-index: 50;
        right: 15%;
        top: 33%;
      }
    }
  }
</style>
