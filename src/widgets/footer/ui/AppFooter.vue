<script setup lang="ts">
  import { AppLogo } from "~/shared/ui/AppLogo";
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <a href="/">
          <AppLogo />
        </a>
        <span class="footer__info">
          Дизайн и разработка:
          <a
            href="#"
            class="footer__link"
          >
            Даниил Волков
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  @use "~/shared/assets/styles/core";
  @use "@/shared/assets/styles/mixins";

  .footer {
    &__wrapper {
      padding: core.$spacing-3 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__info {
      color: core.$color-text;
      opacity: 0.8;

      @include mixins.apply-text("caption");
    }

    &__link {
      color: core.$color-text;
      border-bottom: 2px solid transparent;

      @include mixins.apply-text("link");

      @include mixins.hover {
        border-bottom: 2px solid core.$color-text;
      }
    }
  }
</style>
