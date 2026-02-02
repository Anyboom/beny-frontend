<script setup lang="ts">
  import type { BetEntity } from "../model/bet.entity";
  import "dayjs/locale/ru";
  import { dayjs } from "~/shared/lib/dayjs";
  import { computed } from "#imports";

  const props = defineProps<BetEntity>();

  const startedAt = dayjs(props.startedAt).format("HH:mm | D MMMM YYYY");

  const event = computed(() => `${props.homeTeam.name} - ${props.guestTeam.name}`);
</script>

<template>
  <div class="bet-card">
    <div class="bet-card__wrapper">
      <div class="bet-card__image"></div>
      <div class="bet-card__content">
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Матч:</span>
          <span
            class="bet-card__content-item-value"
            :title="event"
          >
            {{ event }}
          </span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Соревнование:</span>
          <span
            class="bet-card__content-item-value"
            :title="competition.name"
          >
            {{ competition.name }}
          </span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Время:</span>
          <span
            class="bet-card__content-item-value"
            :title="startedAt"
          >
            {{ startedAt }}
          </span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">Прогноз:</span>
          <span
            class="bet-card__content-item-value"
            :title="forecast.name"
          >
            {{ forecast.name }}
          </span>
        </div>
        <div class="bet-card__content-item">
          <span class="bet-card__content-item-key">КФ:</span>
          <span
            class="bet-card__content-item-value"
            :title="String(coefficient)"
          >
            {{ coefficient }}
          </span>
        </div>
      </div>
      <div
        class="bet-card__status"
        :class="[`bet-card__status--${status}`]"
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

      &-value {
        text-wrap: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &__image {
      height: 100px;

      background-image: url("~/shared/assets/images/bet-card__background.svg");
      background-size: cover;
    }
  }
</style>
