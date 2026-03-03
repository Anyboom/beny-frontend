<script setup lang="ts">
  import { BetCard, BetCardSkeleton, getBetsApi } from "~/entities/bet";
  import { AppButton } from "~/shared/ui/AppButton";
  import type { Block, ButtonGroup } from "~/pages/dynamic-page";
  import { setAttr } from "@directus/visual-editing";
  import { toBetMapper } from "~/entities/bet/api/to-bet.mapper";
  import { useQuery } from "#imports";

  interface Props extends Block {
    item: {
      id: number;
      title: string;
      button_group: ButtonGroup;
    };
  }

  const { item } = defineProps<Props>();

  const { data, isPending, error } = useQuery({
    key: ["half-stats"],
    query: async () => {
      const response = await getBetsApi({
        fields: "*.*",
        limit: 8,
        sort: "-date_updated",
        filter: { "status": { "_nin": "pending" } },
      });

      return response.data.map(toBetMapper);
    },
  });

  const title = item.title;

  const buttons = item?.button_group?.buttons;
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
        <h2
          class="half-stats__title"
          :data-directus="setAttr({ collection: 'block_half_stats', item: item.id, fields: 'title', mode: 'modal' })"
        >
          {{ title }}
        </h2>
        <template v-if="isPending">
          <div class="half-stats__items">
            <BetCardSkeleton
              v-for="element in 8"
              :key="element"
            />
          </div>
        </template>
        <template v-else-if="!isPending && !error && data">
          <div class="half-stats__items">
            <BetCard
              v-for="(element, index) in data"
              :key="index"
              v-bind="element"
            />
          </div>
          <div
            class="half-stats__buttons"
            :data-directus="
              setAttr({ collection: 'block_half_stats', item: item.id, fields: 'button_group', mode: 'modal' })
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
        </template>
        <template v-else> </template>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "@/shared/assets/styles/mixins";

  .half-stats {
    margin-bottom: core.$spacing-8;
    &__title {
      @include mixins.apply-text("heading-2");
      color: core.$color-text;
      margin-bottom: core.$spacing-2;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: core.$spacing-2;
      margin-bottom: core.$spacing-2;

      @include mixins.view-port-md {
        grid-template-columns: repeat(3, 1fr);
      }

      @include mixins.view-port-sm {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mixins.view-port-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__buttons {
      text-align: center;
    }
  }
</style>
