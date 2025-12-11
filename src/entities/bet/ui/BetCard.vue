<script setup lang="ts">
  import type { BetEntity } from "~/entities/bet/model/bet.entity";
  import "dayjs/locale/ru";
  import { dayjs } from "~/shared/lib/dayjs";

  const props = defineProps<BetEntity>();

  const startedAt = dayjs(props.startedAt).format("HH:mm | D MMMM YYYY");
</script>

<template>
  <div class="bet-card">
    <div class="bet-card__wrapper">
      <div class="bet-card__image"></div>
      <div class="bet-card__content">
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Матч:</span>
          <span class="bet-card__content-item-value">{{ props.homeTeam }} - {{ props.guestTeam }}</span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Соревнование:</span>
          <span class="bet-card__content-item-value">{{ props.competition }}</span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Время:</span>
          <span class="bet-card__content-item-value">{{ startedAt }}</span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Прогноз:</span>
          <span class="bet-card__content-item-value">{{ props.forecast }}</span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">КФ:</span>
          <span class="bet-card__content-item-value">{{ props.coefficient }}</span>
        </div>
      </div>
      <div
        class="bet-card__status"
        :class="[`bet-card__status--${props.status}`]"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;

  .bet-card {
    &__wrapper {
      border-radius: $spacing-2;
      overflow: hidden;
      border: 1px solid #eeeeee;
    }

    &__status {
      height: 10px;

      &--win {
        background: $color-bet-status-win;
      }

      &--lose {
        background: $color-bet-status-lose;
      }

      &--return {
        background: $color-bet-status-return;
      }

      &--pending {
        background: $color-bet-status-pending;
      }
    }

    &__content {
      padding: $spacing-2;
      background: $color-default-white;
    }

    &__content-item {
      display: flex;
      gap: 4px;
      color: $color-text;

      @include apply-text("caption-small");

      &-key {
        font-weight: 700;
      }
    }

    &__image {
      height: 100px;

      background-image: url("~/shared/assets/images/bet-card__background.svg");
      background-size: cover;
    }
  }
</style>
