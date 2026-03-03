<script setup lang="ts">
  import type { Block } from "~/pages/dynamic-page";
  import { setAttr } from "@directus/visual-editing";

  interface Props extends Block {
    item: {
      id: number;
      title: string;
      cards: {
        title: string;
        content: string;
      }[];
    };
  }

  const { item } = defineProps<Props>();
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section
    id="why-trust-us"
    class="why-trust-us"
  >
    <div class="container">
      <div class="why-trust-us__wrapper">
        <h2
          class="why-trust-us__title"
          :data-directus="setAttr({ collection: 'block_why_trust_us', item: item.id, fields: 'title', mode: 'modal' })"
        >
          {{ item.title }}
        </h2>
        <div
          class="why-trust-us__card-wrapper"
          :data-directus="setAttr({ collection: 'block_why_trust_us', item: item.id, fields: 'cards', mode: 'modal' })"
        >
          <div
            v-for="element of item.cards"
            :key="element.title"
            class="why-trust-us__card"
          >
            <h3 class="why-trust-us__card-title">
              {{ element.title }}
            </h3>
            <p class="why-trust-us__card-caption">
              {{ element.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "@/shared/assets/styles/mixins";

  .why-trust-us {
    margin-bottom: core.$spacing-8;
    &__title {
      color: core.$color-text;
      margin-bottom: core.$spacing-2;

      @include mixins.apply-text("heading-2");
    }

    &__card {
      padding: core.$spacing-3;
      border-radius: core.$spacing-3;
      background: core.$color-white;
    }

    &__card-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: core.$spacing-3;

      @include mixins.view-port-sm {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mixins.view-port-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__card-title {
      color: core.$color-text;
      margin-bottom: core.$spacing-2;

      @include mixins.apply-text("heading-6");
    }

    &__card-caption {
      color: #565963;

      @include mixins.apply-text("caption");
    }
  }
</style>
