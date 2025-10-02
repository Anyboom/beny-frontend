<script setup lang="ts">
  import type { BetEntity } from "~/entities/bet/model/bet.entity";

  defineProps<{
    data: BetEntity;
  }>();
</script>

<template>
  <div class="bet-card">
    <div class="bet-card__wrapper">
      <div class="bet-card__image"></div>
      <div class="bet-card__content">
        <div class="bet-card__content-item">
          <span>Матч:</span>
          <span>{{ data.homeTeam }} - {{ data.guestTeam }}</span>
        </div>
        <div class="bet-card__content-item">
          <span>Соревнование:</span>
          <span>{{ data.competition }}</span>
        </div>
        <div class="bet-card__content-item">
          <span>Время:</span>
          <span>{{ data.startedAt }}</span>
        </div>
        <div class="bet-card__content-item">
          <span>Прогноз:</span>
          <span>{{ data.forecast }}</span>
        </div>
        <div class="bet-card__content-item">
          <span>КФ:</span>
          <span>{{ data.coefficient }}</span>
        </div>
      </div>
      <div class="bet-card__status" :class="[`bet-card__status--${data.status}`]"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/typography" as *;
  @use "@/assets/styles/variables" as *;

  .bet-card {
    &__wrapper {
      border-radius: $spacing-2;
      overflow: hidden;
      border: 1px solid #eeeeee;
    }

    &__status {
      height: 10px;

      &--win {
        background: #94c2af;
      }

      &--lose {
        background: #c29494;
      }

      &--return {
        background: #94a4c2;
      }

      &--pending {
        background: #8f8f8f;
      }
    }

    &__content {
      padding: $spacing-2;
      background: $color-default-white;
    }

    &__content-item {
      font-size: 12px;
      display: flex;
      gap: 4px;

      span:first-of-type {
        font-weight: 700;
      }
    }

    &__image {
      height: 100px;

      background-image: url("~/assets/images/bet-card__background.svg");
      background-size: cover;
    }
  }
</style>
