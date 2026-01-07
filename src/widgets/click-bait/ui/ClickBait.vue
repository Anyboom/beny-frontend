<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
  import type { Block, ButtonGroup } from "~/pages/dynamic-page";
  import { setAttr } from "@directus/visual-editing";

  interface Props extends Block {
    item: {
      id: number;
      content: string;
      button_group: ButtonGroup;
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
  <section class="click-bait">
    <div class="container">
      <div
        class="click-bait__wrapper"
        :data-directus="
          setAttr({ collection: 'block_click_bait', item: item.id, fields: 'content, button_group', mode: 'modal' })
        "
      >
        <p class="click-bait__content">
          {{ item.content }}
        </p>
        <app-button
          v-for="button of item.button_group.buttons"
          :key="button.id"
          :href="button.href"
          :target="button.target"
        >
          {{ button.label }}
        </app-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .click-bait {
    margin-bottom: $spacing-8;

    @include view-port-xs {
      display: none;
    }
    &__wrapper {
      background: $color-default-white;
      border-radius: $spacing-2;
      padding: $spacing-2;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      @include apply-text("caption");
      color: $color-text;
    }
  }
</style>
