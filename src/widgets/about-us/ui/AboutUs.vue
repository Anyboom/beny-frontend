<script lang="ts" setup>
  import type { Block } from "~/shared/lib/dynamic-page";
  import { setAttr } from "@directus/visual-editing";
  import { AppSafeHtmlRenderer } from "~/shared/ui/AppSafeHtmlRenderer";

  interface AboutUsProps extends Block {
    item: {
      id: number;
      title: string;
      content: string;
    };
  }

  const { item } = defineProps<AboutUsProps>();
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <section
    id="about-us"
    class="about-us"
  >
    <div class="container">
      <div class="about-us__wrapper">
        <div class="about-us__content">
          <h2
            class="about-us__title"
            :data-directus="setAttr({ collection: 'block_about_us', item: item.id, fields: 'title', mode: 'modal' })"
          >
            О нас
          </h2>
          <AppSafeHtmlRenderer
            :html="item.content"
            :data-directus="setAttr({ collection: 'block_about_us', item: item.id, fields: 'content', mode: 'modal' })"
          />
        </div>
        <div class="about-us__image-wrapper">
          <div class="about-us__image">
            <svg
              class="about-us__icon"
              viewBox="0 0 43 45"
              width="43"
              height="45"
            >
              <use href="@/shared/assets/images/sprites.svg#logo" />
            </svg>
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

  .about-us {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__content {
      padding-right: $spacing-4;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-2;

      @include view-port-sm {
        display: block;
      }
    }

    &__icon {
      fill: $color-white;
      width: 221px;
    }

    &__image {
      border-radius: $spacing-2;
      background: $color-accent;
      padding: $spacing-8 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &__image-wrapper {
      @include view-port-sm {
        display: none;
      }
    }
  }
</style>
