<script setup lang="ts">
  import { AppAccordion } from "~/shared/ui/AppAccordion";
  import type { Block } from "~/pages/dynamic-page";
  import { setAttr } from "@directus/visual-editing";
  import { useColumns } from "~/shared/composables/use-columns";

  interface Props extends Block {
    item: {
      id: number;
      title: string;
      content: {
        title: string;
        content: string;
      }[];
    };
  }

  const { item } = defineProps<Props>();

  const { columns } = useColumns(item.content);
  const [firstColumn, secondColumn] = columns.value;
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section
    id="often-ask"
    class="often-ask"
  >
    <div class="container">
      <div class="often-ask__wrapper">
        <h2
          class="often-ask__title"
          :data-directus="setAttr({ collection: 'block_often_ask', item: item.id, fields: 'title', mode: 'modal' })"
        >
          {{ item.title }}
        </h2>
        <div
          class="often-ask__items"
          :data-directus="setAttr({ collection: 'block_often_ask', item: item.id, fields: 'content', mode: 'modal' })"
        >
          <div class="often-ask__items-column">
            <app-accordion
              v-for="(element, index) of firstColumn"
              :key="index"
            >
              <template #title>
                {{ element.title }}
              </template>
              <template #default>
                {{ element.content }}
              </template>
            </app-accordion>
          </div>
          <div class="often-ask__items-column">
            <app-accordion
              v-for="(element, index) of secondColumn"
              :key="index"
            >
              <template #title>
                {{ element.title }}
              </template>
              <template #default>
                {{ element.content }}
              </template>
            </app-accordion>
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

  .often-ask {
    margin-bottom: $spacing-8;
    &__title {
      @include apply-text("heading-2");
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__items {
      display: grid;
      gap: $spacing-2;
      grid-template-columns: repeat(2, 1fr);

      &-column {
        display: flex;
        flex-direction: column;
        gap: $spacing-2;
      }

      @include view-port-sm {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>
