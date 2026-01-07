<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
  import { BetCard, type BetDTO } from "~/entities/bet";
  import type { Block, ButtonGroup } from "~/pages/dynamic-page";
  import { setAttr } from "@directus/visual-editing";
  import { toBetMapper } from "~/entities/bet/api/to-bet.mapper";

  interface Props extends Block {
    item: {
      id: number;
      title: string;
      button_group: ButtonGroup;
      bets: {
        id: number;
        bets_id: BetDTO;
      }[];
    };
  }

  const { item } = defineProps<Props>();

  const title = item.title;

  const buttons = item.button_group.buttons;

  const bets = item.bets.map((bet) => toBetMapper(bet.bets_id));
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
  @use "@/shared/assets/styles/typography" as *;
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
      color: $color-text;
      margin-bottom: $spacing-5;
      max-width: 540px;

      @include apply-text("display-1");

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
