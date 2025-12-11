<script setup lang="ts">
  import { computed, watch, onUnmounted, useSlots } from "vue";
  import { Icon } from "#components";
  import { useEventListener, useScrollLock } from "@vueuse/core";

  type DrawerPosition = "left" | "right" | "top" | "bottom";

  interface AppDrawerProps {
    modelValue: boolean;
    title?: string;
    position?: DrawerPosition;
    size?: string;
    closable?: boolean;
    maskClosable?: boolean;
    escClosable?: boolean;
    customClass?: string;
  }

  const {
    title = "",
    position = "right",
    size = "400px",
    customClass = "",
    closable = true,
    maskClosable = true,
    escClosable = true,
    modelValue,
  } = defineProps<AppDrawerProps>();

  interface AppDrawerEmits {
    "update:modelValue": [value: boolean];
    "open": [];
    "close": [];
  }

  const emit = defineEmits<AppDrawerEmits>();

  const slots = useSlots();

  const showHeader = computed<boolean>(() => {
    return Boolean(title || closable || slots.header);
  });

  const hasFooterSlot = computed<boolean>(() => {
    return Boolean(slots.footer);
  });

  const drawerModifiers = computed<string[]>(() => {
    const modifiers: string[] = [`app-drawer--${position}`, customClass];

    if (showHeader.value) {
      modifiers.push("app-drawer--with-header");
    }

    if (hasFooterSlot.value) {
      modifiers.push("app-drawer--with-footer");
    }

    return modifiers;
  });

  const overlayModifiers = computed<string>(() => {
    return `app-drawer__overlay--${position}`;
  });

  const drawerTransitionName = computed<string>(() => {
    return `app-drawer__slide-${position}`;
  });

  const drawerStyles = computed(() => {
    const positionConfig = {
      left: "width",
      right: "width",
      top: "height",
      bottom: "height",
    } as const;

    const config = positionConfig[position];

    if (config == undefined) {
      return undefined;
    }

    return {
      [config]: size,
    };
  });

  function close() {
    emit("update:modelValue", false);
    emit("close");
  }

  function handleOverlayClick() {
    if (maskClosable) {
      close();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (escClosable && event.key === "Escape" && modelValue) {
      close();
    }
  }

  const isLockedScrollBody = useScrollLock(document?.body);

  function lockBodyScroll() {
    isLockedScrollBody.value = true;
  }

  function unlockBodyScroll() {
    isLockedScrollBody.value = false;
  }

  watch(
    () => modelValue,
    () => {
      if (modelValue) {
        emit("open");
        lockBodyScroll();
      } else {
        unlockBodyScroll();
      }
    },
  );

  useEventListener("keydown", handleKeydown);

  onUnmounted(unlockBodyScroll);
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="modelValue"
        class="app-drawer__overlay"
        :class="overlayModifiers"
        @click="handleOverlayClick"
      ></div>
    </Transition>

    <Transition :name="drawerTransitionName">
      <div
        v-if="modelValue"
        class="app-drawer"
        :class="drawerModifiers"
        :style="drawerStyles"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
      >
        <div
          v-if="showHeader"
          class="app-drawer__header"
        >
          <div class="app-drawer__header-content">
            <h2
              v-if="title"
              class="app-drawer__title"
            >
              {{ title }}
            </h2>
            <slot name="header"></slot>
          </div>

          <button
            v-if="closable"
            class="app-drawer__close"
            aria-label="Закрыть"
            type="button"
            @click="close"
          >
            <slot name="close-icon">
              <Icon name="charm:cross" />
            </slot>
          </button>
        </div>

        <div class="app-drawer__body">
          <slot></slot>
        </div>

        <div
          v-if="hasFooterSlot"
          class="app-drawer__footer"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
  @use "~/shared/assets/styles/typography" as *;
  @use "~/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/mixins" as *;

  .app-drawer {
    $block: &;

    position: fixed;
    background: #fff;
    z-index: 9999;
    display: flex;
    flex-direction: column;

    &--left {
      top: 0;
      left: 0;
      bottom: 0;

      @include view-port-sm {
        width: 100vw;
        max-width: 100vw;
      }
    }

    &--right {
      top: 0;
      right: 0;
      bottom: 0;

      @include view-port-sm {
        width: 100vw;
        max-width: 100vw;
      }
    }

    &--top {
      top: 0;
      left: 0;
      right: 0;

      @include view-port-sm {
        height: 80vh;
        max-height: 80vh;
      }
    }

    &--bottom {
      bottom: 0;
      left: 0;
      right: 0;

      @include view-port-sm {
        height: 80vh;
        max-height: 80vh;
      }
    }

    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9998;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $spacing-2 $spacing-3;
      border-bottom: 1px solid #f0f0f0;
      flex-shrink: 0;

      @include view-port-sm {
        padding: $spacing-1 $spacing-2;
      }

      &-content {
        flex: 1;
        margin-right: $spacing-2;
      }
    }

    &__title {
      margin: 0;
      color: $color-text;
      @include apply-text("heading-5");
    }

    &__close {
      font-size: $spacing-4;
      cursor: pointer;
      padding: calc($spacing-1 * 0.5);
      color: $color-text;
      background-color: $color-default-white;
      transition: $transition-default;
      border-radius: $spacing-1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: $spacing-4;
      height: $spacing-4;

      &:hover {
        background-color: $color-default-white-hover;
        color: $color-text-hover;
      }

      &-icon {
        line-height: 1;
      }
    }

    &__body {
      flex: 1;
      padding: $spacing-3;

      @include view-port-sm {
        padding: $spacing-2;
      }
    }

    &__footer {
      padding: $spacing-2 $spacing-3;
      border-top: 1px solid #f0f0f0;
      flex-shrink: 0;
      background: #fafafa;

      @include view-port-sm {
        padding: $spacing-1 $spacing-2;
      }
    }

    &__slide {
      &-left-enter-active,
      &-left-leave-active,
      &-right-enter-active,
      &-right-leave-active,
      &-top-enter-active,
      &-top-leave-active,
      &-bottom-enter-active,
      &-bottom-leave-active {
        transition: $transition-default;
      }

      &-left-enter-from {
        transform: translateX(-100%);
      }

      &-left-leave-to {
        transform: translateX(-100%);
      }

      &-right-enter-from {
        transform: translateX(100%);
      }

      &-right-leave-to {
        transform: translateX(100%);
      }

      &-top-enter-from {
        transform: translateY(-100%);
      }

      &-top-leave-to {
        transform: translateY(-100%);
      }

      &-bottom-enter-from {
        transform: translateY(100%);
      }

      &-bottom-leave-to {
        transform: translateY(100%);
      }
    }
  }
</style>
