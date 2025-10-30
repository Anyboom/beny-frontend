<script setup lang="ts">
  import { PersonalForecastForm } from "~/features/personal-forecast";
  import type { Block } from "~/shared/lib/dynamic-page";
  import { AppSafeHtmlRenderer } from "~/shared/ui/AppSafeHtmlRenderer";
  import { setAttr } from "@directus/visual-editing";

  interface PersonalForecastProps extends Block {
    item: {
      id: number;
      title: string;
      content: string;
    };
  }

  const { item } = defineProps<PersonalForecastProps>();
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section
    id="personal-forecast"
    class="personal-forecast"
  >
    <div class="container">
      <div class="personal-forecast__wrapper">
        <div class="personal-forecast__content">
          <h2
            class="personal-forecast__title"
            :data-directus="
              setAttr({ collection: 'block_personal_forecast', item: item.id, fields: 'title', mode: 'modal' })
            "
          >
            {{ item.title }}
          </h2>
          <AppSafeHtmlRenderer
            :html="item.content"
            :data-directus="
              setAttr({ collection: 'block_personal_forecast', item: item.id, fields: 'content', mode: 'modal' })
            "
          />
        </div>
        <div class="personal-forecast__form">
          <PersonalForecastForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .personal-forecast {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-2;

      @include view-port-md {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>
