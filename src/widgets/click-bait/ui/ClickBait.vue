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
  @use "~/shared/assets/styles/core";
  @use "@/shared/assets/styles/mixins";

  .click-bait {
    margin-bottom: core.$spacing-8;

    @include mixins.view-port-xs {
      display: none;
    }
    &__wrapper {
      background: core.$color-default-white;
      border-radius: core.$spacing-2;
      padding: core.$spacing-2;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      @include mixins.apply-text("caption");
      color: core.$color-text;
    }
  }
</style>
