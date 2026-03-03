<script setup lang="ts">
  interface Props {
    title?: string;
    description?: string;
  }

  const {
    title = "Результат не найден",
    description = "Попробуйте изменить параметры фильтра, чтобы найти то, что вам нужно.",
  } = defineProps<Props>();
</script>

<template>
  <div class="app-empty-state">
    <div class="app-empty-state__inner">
      <Icon
        name="charm:stack"
        class="app-empty-state__icon"
      />

      <h2
        v-if="title"
        class="app-empty-state__title"
      >
        {{ title }}
      </h2>

      <p
        v-if="description"
        class="app-empty-state__description"
      >
        {{ description }}
      </p>

      <div
        v-if="$slots.actions"
        class="app-empty-state__actions"
      >
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "~/shared/assets/styles/mixins";
  @use "~/shared/assets/styles/core";

  .app-empty-state {
    background: core.$color-default-white;
    padding: core.$spacing-8 core.$spacing-2;
    border-radius: core.$spacing-2;

    &__inner {
      max-width: 500px;
      text-align: center;
      margin: 0 auto;
    }

    &__icon {
      margin: 0 auto;
      width: core.$spacing-10;
      height: core.$spacing-10;
      color: core.$color-text;
    }

    &__title {
      margin-top: core.$spacing-1;
      color: core.$color-text;

      @include mixins.apply-text("heading-3");
    }

    &__description {
      margin-top: core.$spacing-1;
      color: core.$color-placeholder;
      text-wrap: pretty;

      @include mixins.apply-text("body");
    }

    &__actions {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>
