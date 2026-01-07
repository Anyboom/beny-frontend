<script setup lang="ts">
  import { ref, computed } from "vue";
  import { onClickOutside } from "@vueuse/core";
  import { useTemplateRef } from "#imports";

  interface Option {
    [key: string]: any;
  }

  interface Props {
    options: Option[];
    optionLabel?: string;
    optionKey?: string;
    showSearch?: boolean;
    showClear?: boolean;
    disabled?: boolean;
  }

  const {
    options,
    optionLabel = undefined,
    optionKey = undefined,
    disabled = false,
    showClear = false,
    showSearch = false,
  } = defineProps<Props>();

  const selectedOption = defineModel<Option>();
  const isOpen = ref(false);
  const searchQuery = ref("");
  const dropdownRef = useTemplateRef<HTMLDivElement>("app-select-ref");

  function getOptionLabel(option: Option): string {
    return optionLabel ? option[optionLabel] : String(option.name);
  }

  function getOptionKey(option: Option): string {
    return optionKey ? String(option[optionKey]) : JSON.stringify(option);
  }

  function toggleDropdown() {
    if (disabled) {
      return;
    }

    if (isOpen.value) {
      closeDropdown();
    } else {
      openDropdown();
    }

    searchQuery.value = "";
  }

  function closeDropdown() {
    isOpen.value = false;
  }

  function openDropdown() {
    isOpen.value = true;
  }

  function isSelectedOption(option: Option): boolean {
    if (selectedOption.value != undefined) {
      return getOptionKey(selectedOption.value) === getOptionKey(option);
    }

    return false;
  }

  function toggleOption(option: Option) {
    if (disabled || isSelectedOption(option)) {
      return;
    }

    selectedOption.value = option;

    closeDropdown();
  }

  function clearOption() {
    selectedOption.value = undefined;
  }

  const selectedLabel = computed(() => {
    if (selectedOption.value) {
      return getOptionLabel(selectedOption.value);
    }

    return undefined;
  });

  const filteredOptions = computed(() => {
    if (searchQuery.value) {
      return options.filter((option) => {
        const from = getOptionLabel(option).toLowerCase();
        const query = searchQuery.value.toLowerCase();

        return from.includes(query);
      });
    }

    return options;
  });

  onClickOutside(dropdownRef, closeDropdown);
</script>

<template>
  <div
    ref="app-select-ref"
    class="app-select"
    :class="{
      'app-select--disabled': disabled,
      'app-select--open': isOpen,
    }"
  >
    <div
      class="app-select__header"
      @click="toggleDropdown"
    >
      <span class="app-select__selected-label">
        {{ selectedLabel }}
      </span>

      <div class="app-select__icons-wrapper">
        <span
          v-if="showClear && selectedOption"
          class="app-select__dropdown-remove"
          @click.stop="clearOption"
        >
          <Icon
            name="charm:cross"
            size="20"
          />
        </span>
        <span
          class="app-select__dropdown-icon"
          :class="{
            'app-select__dropdown-icon--open': isOpen,
          }"
        >
          <Icon
            name="charm:chevron-down"
            size="20"
          />
        </span>
      </div>
    </div>

    <div
      v-if="isOpen && !disabled"
      class="app-select__dropdown"
    >
      <div
        v-if="showSearch"
        class="app-select__search"
      >
        <input
          v-model="searchQuery"
          class="app-select__search-input"
          :disabled="disabled"
        />
      </div>

      <div class="app-select__options">
        <div
          v-for="(option, optionIndex) in filteredOptions"
          :key="optionIndex"
          class="app-select__option"
          :class="{
            'app-select__option--selected': isSelectedOption(option),
            'app-select__option--disabled': disabled,
          }"
          @click="toggleOption(option)"
        >
          <span class="app-select__option-label">
            {{ getOptionLabel(option) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .app-select {
    $self: &;
    position: relative;

    &--disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    &__icons-wrapper {
      display: flex;
      gap: 10px;
    }

    &__header {
      border-radius: $spacing-1;
      padding: $spacing-2;

      background: $color-default-white;
      color: $color-text;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 2px solid transparent;

      transition: border $transition-default;

      @include hover {
        border: 2px solid $color-default-border-hover;
      }

      #{$self}--disabled & {
        cursor: not-allowed;
        background-color: #f5f5f5;
      }

      #{$self}--open & {
        border-top: 2px solid $color-accent;
        border-left: 2px solid $color-accent;
        border-right: 2px solid $color-accent;
        border-bottom: 2px solid transparent;

        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &__selected-label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
      color: $color-text;

      @include apply-text("input");
    }

    &__dropdown-remove,
    &__dropdown-icon {
      display: flex;
      align-items: center;

      .iconify {
        transition: $transition-default;
      }

      &--open .iconify {
        transform: rotate(-180deg);
      }
    }

    &__dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      border-bottom-left-radius: $spacing-1;
      border-bottom-right-radius: $spacing-1;
      background: $color-default-white;
      z-index: 1000;
      overflow: hidden;

      margin-top: -2px;

      border-bottom: 2px solid $color-accent;
      border-left: 2px solid $color-accent;
      border-right: 2px solid $color-accent;
    }

    &__search {
      padding: 8px;
      border-bottom: 1px solid #eee;

      &-input {
        background: $color-default-white;
        color: $color-text;
        border-radius: $spacing-1;
        padding: $spacing-2;
        border: 2px solid $color-default-border;
        width: 100%;

        @include apply-text("input");

        &::placeholder {
          color: $color-placeholder;
        }
      }
    }

    &__options {
      padding: 8px;
      overflow-y: auto;
      scrollbar-width: none;
      overscroll-behavior: contain;
      max-height: 200px;
    }

    &__option {
      padding: $spacing-1;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: $spacing-1;
      border-radius: $spacing-1;

      &:not(&--selected):hover {
        background: $color-default-white-hover;
      }

      &--selected {
        background: $color-accent;
        color: $color-white;
      }

      &--disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
    }

    &__option-label {
      flex-grow: 1;
    }
  }
</style>
