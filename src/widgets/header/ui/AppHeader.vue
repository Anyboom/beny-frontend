<script setup lang="ts">
  import { AppLogo } from "~/shared/ui/AppLogo";
  import { Icon } from "#components";
  import { ref } from "vue";
  import type { Block, ButtonGroup } from "~/pages/dynamic-page";

  const isVisibleMobileMenu = ref<boolean>(false);

  function toggleMenu() {
    isVisibleMobileMenu.value = !isVisibleMobileMenu.value;
  }

  function closeMenu() {
    isVisibleMobileMenu.value = false;
  }

  interface Props extends Block {
    item: {
      id: number;
      button_group: ButtonGroup;
    };
  }

  const { item } = defineProps<Props>();

  const elements = item?.button_group?.buttons;
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a href="/">
          <AppLogo />
        </a>
        <div class="header__nav-wrapper">
          <nav
            class="header__nav"
            :class="{ 'header__nav--open': isVisibleMobileMenu }"
          >
            <a
              v-for="element in elements"
              :key="element.id"
              class="header__nav-item"
              :href="element.href"
              :target="element.target"
              @click="closeMenu"
            >
              {{ element.label }}
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

<style lang="scss">
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;
  @use "@/shared/assets/styles/typography" as *;

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

      @include apply-text("link");

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
