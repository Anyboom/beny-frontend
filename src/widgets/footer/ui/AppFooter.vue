<script setup lang="ts">

import { AppLogo } from "~/shared/ui/AppLogo";
import { Icon } from "#components";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <a href="/">
          <AppLogo />
        </a>
        <span class="footer__info">
          Дизайн и разработка: <a href="#" class="footer__link">Даниил Волков</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/typography" as *;

  .footer {
    &__wrapper {
      padding: $spacing-3 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__info {
      color: $color-text;
      opacity: 0.8;
      font-size: 14px;
    }

    &__link {
      @include link;
    }
  }
</style>