<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
</script>

<template>
  <section class="click-bait">
    <div class="container">
      <div class="click-bait__wrapper">
        <p class="click-bait__content">Твой успех начинается вместе с нами</p>
        <app-button href="https://vk.com" target="_blank"> Присоединиться </app-button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

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
      font-size: 14px;
      font-weight: 500;
      color: $color-text;
    }
  }
</style>
