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
  @use "~/shared/assets/styles/core";
  @use "@/shared/assets/styles/mixins";

  .header {
    margin-bottom: core.$spacing-8;

    &__wrapper {
      padding: core.$spacing-3 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__burger {
      height: core.$spacing-4;
      width: core.$spacing-4;
      color: core.$color-accent;
      cursor: pointer;
      transition: core.$transition-default;
      display: none;
      z-index: 3000;
      position: relative;

      &--active {
        color: core.$color-accent-hover;
      }

      @include mixins.view-port-md {
        display: block;
      }

      @include mixins.hover {
        color: core.$color-accent-hover;
      }
    }

    &__nav {
      display: flex;
      gap: core.$spacing-2;

      @include mixins.apply-text("link");

      @include mixins.view-port-md {
        display: none;
      }

      &--open {
        display: flex;
        position: absolute;
        flex-direction: column;
        right: 0;
        background: core.$color-default-white;
        padding: core.$spacing-3;
        border-radius: core.$spacing-2;
        z-index: 2000;
        top: core.$spacing-5;
      }
    }

    &__nav-wrapper {
      position: relative;
    }

    &__nav-item {
      color: core.$color-text;
      transition: core.$transition-default;

      @include mixins.hover {
        color: core.$color-text-hover;
      }
    }
  }
</style>
