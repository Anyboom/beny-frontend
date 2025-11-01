<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
  import { BetCard } from "~/entities/bet";
  import type { Block } from "~/pages/dynamic-page";
  import type { ButtonGroup } from "~/pages/dynamic-page/model/button-group.interface";
  import type { BetStatusEnum } from "~/entities/bet/model/bet.entity";
  import { setAttr } from "@directus/visual-editing";

  interface MainBannerProps extends Block {
    item: {
      id: number;
      title: string;
      button_group: ButtonGroup;
      bets: {
        id: number;
        bets_id: {
          id: number;
          started_at: string;
          coefficient: number;
          status: BetStatusEnum;
          home_team: {
            name: string;
          };
          guest_team: {
            name: string;
          };
          competition: {
            name: string;
          };
          forecast: {
            name: string;
          };
        };
      }[];
    };
  }

  const { item } = defineProps<MainBannerProps>();

  const title = item.title;

  const buttons = item.button_group.buttons;

  const bets = item.bets.map((bet) => ({
    id: bet.bets_id.id,
    coefficient: bet.bets_id.coefficient,
    competition: bet.bets_id.competition.name,
    startedAt: bet.bets_id.started_at,
    status: bet.bets_id.status,
    guestTeam: bet.bets_id.guest_team.name,
    homeTeam: bet.bets_id.home_team.name,
    forecast: bet.bets_id.forecast.name,
  }));
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section class="main-banner">
    <div class="container">
      <div class="main-banner__wrapper">
        <div class="main-banner__content">
          <h1
            class="main-banner__title"
            :data-directus="setAttr({ collection: 'block_main_banner', item: item.id, fields: 'title', mode: 'modal' })"
          >
            {{ title }}
          </h1>
          <div
            class="main-banner__buttons"
            :data-directus="
              setAttr({
                collection: 'block_main_banner',
                item: item.id,
                fields: 'button_group',
                mode: 'modal',
              })
            "
          >
            <app-button
              v-for="button of buttons"
              :key="button.id"
              :href="button.href"
              :target="button.target"
            >
              {{ button.label }}
            </app-button>
          </div>
        </div>
        <div
          class="main-banner__cards"
          :data-directus="
            setAttr({
              collection: 'block_main_banner',
              item: item.id,
              fields: 'bets',
              mode: 'modal',
            })
          "
        >
          <div class="main-banner__cards-wrapper">
            <div
              v-for="bet in bets"
              :key="bet.id"
              class="main-banner__card"
            >
              <BetCard v-bind="bet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

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
