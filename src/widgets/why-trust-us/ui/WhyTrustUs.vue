<script setup lang="ts">
  import type { Block } from "~/shared/lib/dynamic-page";
  import { setAttr } from "@directus/visual-editing";

  interface WhyTrustUsProps extends Block {
    item: {
      id: number;
      title: string;
      cards: {
        title: string;
        content: string;
      }[];
    };
  }

  const { item } = defineProps<WhyTrustUsProps>();
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
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .why-trust-us {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__card {
      padding: $spacing-3;
      border-radius: $spacing-3;
      background: $color-white;
    }

    &__card-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-3;

      @include view-port-sm {
        grid-template-columns: repeat(2, 1fr);
      }

      @include view-port-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__card-title {
      color: $color-text;
      font-weight: 600;
      margin-bottom: $spacing-2;
    }

    &__card-caption {
      color: #565963;
      font-size: 14px;
    }
  }
</style>
