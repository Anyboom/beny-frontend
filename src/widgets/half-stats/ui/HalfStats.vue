<script setup lang="ts">
  import { BetCard, type BetEntity, useGetBetsApi } from "~/entities/bet";
  import { AppButton } from "~/shared/ui/AppButton";
  import BetCardSkeleton from "~/entities/bet/ui/BetCardSkeleton.vue";
  import { computed } from "#imports";
  import type { Block } from "~/pages/dynamic-page";
  import type { ButtonGroup } from "~/pages/dynamic-page/model/button-group.interface";

  interface MainBannerProps extends Block {
    item: {
      id: number;
      title: string;
      button_group: ButtonGroup;
    };
  }

  const { item } = defineProps<MainBannerProps>();

  const { data, pending, error } = await useGetBetsApi();

  const title = item.title;

  const buttons = item?.button_group?.buttons;

  const bets = computed<BetEntity[]>(() => {
    if (data?.value?.data == undefined) {
      return [];
    }

    return data.value.data.map((bet) => ({
      id: bet.id,
      coefficient: bet.coefficient,
      competition: bet.competition.name,
      startedAt: bet.started_at,
      status: bet.status,
      guestTeam: bet.guest_team.name,
      homeTeam: bet.home_team.name,
      forecast: bet.forecast.name,
    }));
  });
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
        <h2 class="half-stats__title">
          {{ title }}
        </h2>
        <template v-if="pending">
          <div class="half-stats__items">
            <BetCardSkeleton
              v-for="element in 8"
              :key="element"
            />
          </div>
        </template>
        <template v-else-if="!pending && !error && data">
          <div class="half-stats__items">
            <BetCard
              v-for="element in bets"
              :key="element.competition"
              v-bind="element"
            />
          </div>
          <div class="half-stats__buttons">
            <app-button
              v-for="button of buttons"
              :key="button.id"
              :href="button.href"
              :target="button.target"
            >
              {{ button.label }}
            </app-button>
          </div>
        </template>
        <template v-else> </template>
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
