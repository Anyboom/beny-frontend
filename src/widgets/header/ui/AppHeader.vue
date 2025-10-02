<script setup lang="ts">
  import { AppLogo } from "~/shared/ui/AppLogo";
  import { Icon } from "#components";
  import { ref } from "vue";

  const isVisibleMobileMenu = ref<boolean>(false);

  function toggleMenu() {
    isVisibleMobileMenu.value = !isVisibleMobileMenu.value;
  }

  function closeMenu() {
    isVisibleMobileMenu.value = false;
  }

  const items = [
    {
      link: "#about-us",
      value: "О нас",
    },
    {
      link: "#why-trust-us",
      value: "Почему нам доверяют",
    },
    {
      link: "#half-stats",
      value: "Статистика",
    },
    {
      link: "#often-ask",
      value: "Часто спрашивают",
    },
    {
      link: "#personal-forecast",
      value: "Индивидуальный прогноз",
    },
  ];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a href="/">
          <AppLogo />
        </a>
        <div class="header__nav-wrapper">
          <nav class="header__nav" :class="{ 'header__nav--open': isVisibleMobileMenu }">
            <a class="header__nav-item" @click="closeMenu" :href="item.link" v-for="item in items" :key="item.value">
              {{ item.value }}
            </a>
          </nav>
          <Icon
            class="header__burger"
            :class="{ 'header__burger--active': isVisibleMobileMenu }"
            name="charm:menu-hamburger"
            @click="toggleMenu"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .header {
    margin-bottom: $spacing-8;

    &__wrapper {
      padding: $spacing-3 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__burger {
      height: $spacing-4;
      width: $spacing-4;
      color: $color-accent;
      cursor: pointer;
      transition: $transition-default;
      display: none;
      z-index: 3000;
      position: relative;

      &--active {
        color: $color-accent-hover;
      }

      @include view-port-md {
        display: block;
      }

      @include hover {
        color: $color-accent-hover;
      }
    }

    &__nav {
      display: flex;
      gap: $spacing-2;

      @include view-port-md {
        display: none;
      }

      &--open {
        display: flex;
        position: absolute;
        flex-direction: column;
        right: 0;
        background: $color-default-white;
        padding: $spacing-3;
        border-radius: $spacing-2;
        z-index: 2000;
        top: $spacing-5;
      }
    }

    &__nav-wrapper {
      position: relative;
    }

    &__nav-item {
      color: $color-text;
      transition: $transition-default;

      @include hover {
        color: $color-text-hover;
      }
    }
  }
</style>
