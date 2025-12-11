<script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from "vue";
  import { set } from "@vueuse/core";

  interface Option {
    [key: string]: any;
  }

  interface Props {
    options: Option[];
    searchable?: boolean;
    placeholder?: string;
    optionLabel?: string;
    disabled?: boolean;
    dataKey?: string;
    grouped?: boolean;
    showClear?: boolean;
    showCounter?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    searchable: false,
    placeholder: "Выберите элементы",
    optionLabel: "label",
    disabled: false,
    dataKey: "value",
    grouped: false,
  });

  const selectedItems = defineModel<Option>();

  const isOpen = ref(false);

  const searchQuery = ref("");

  const dropdownRef = ref<HTMLElement | null>(null);

  function getOptionLabel(option: Option): string {
    return option[props.optionLabel] || String(option.value);
  }

  function getItemKey(item: Option): any {
    return props.dataKey ? item[props.dataKey] : JSON.stringify(item);
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  const flatOptions = computed<Option[]>(() => {
    return props.options as Option[];
  });

  const filteredOptions = computed(() => {
    if (!searchQuery.value) return flatOptions.value;
    return flatOptions.value.filter((option) =>
      getOptionLabel(option).toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  });

  function toggleDropdown() {
    if (props.disabled) {
      return;
    }

    isOpen.value = !isOpen.value;

    if (isOpen.value) {
      searchQuery.value = "";
    }
  }

  function isSelected(option: Option): boolean {
    const optionKey = getItemKey(option);
    if (selectedItems.value) {
      return getItemKey(selectedItems.value) === optionKey;
    }
    return false;
  }

  function toggleOption(option: Option) {
    if (props.disabled) {
      return;
    }

    selectedItems.value = option;

    set(isOpen, false);
  }

  function removeItems() {
    selectedItems.value = [];
  }

  const selectedLabels = computed(() => {
    if (selectedItems.value) {
      return getOptionLabel(selectedItems.value);
    }
    return undefined;
  });
</script>

<template>
  <div
    ref="dropdownRef"
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
      <span
        v-if="selectedItems?.length === 0"
        class="app-select__placeholder"
      >
        {{ placeholder }}
      </span>
      <span
        v-else
        class="app-select__selected-labels"
      >
        {{ selectedLabels }}
      </span>

      <div class="app-select__icons-wrapper">
        <span
          v-if="selectedItems?.length && props.showCounter"
          class="app-select__dropdown-counter"
        >
          {{ selectedItems.length }}
        </span>
        <span
          v-if="props.showClear"
          class="app-select__dropdown-remove"
          @click.stop="removeItems"
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
        v-if="searchable"
        class="app-select__search"
      >
        <input
          v-model="searchQuery"
          class="app-select__search-input"
          placeholder="Поиск..."
          :disabled="disabled"
        />
      </div>

      <div class="app-select__options">
        <div
          v-for="(option, optionIndex) in filteredOptions"
          :key="optionIndex"
          class="app-select__option"
          :class="{
            'app-select__option--selected': isSelected(option),
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

    &__placeholder {
      color: $color-text;
      @include apply-text("caption-small");
    }

    &__selected-labels {
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
