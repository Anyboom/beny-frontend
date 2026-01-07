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
  @use "@/shared/assets/styles/variables" as *;
  @use "~/shared/assets/styles/typography" as *;

  .app-empty-state {
    background: $color-default-white;
    padding: $spacing-8 $spacing-2;
    border-radius: $spacing-2;

    &__inner {
      max-width: 500px;
      text-align: center;
      margin: 0 auto;
    }

    &__icon {
      margin: 0 auto;
      width: $spacing-10;
      height: $spacing-10;
      color: $color-text;
    }

    &__title {
      margin-top: $spacing-1;
      color: $color-text;

      @include apply-text("heading-3");
    }

    &__description {
      margin-top: $spacing-1;
      color: $color-placeholder;
      text-wrap: pretty;

      @include apply-text("body");
    }

    &__actions {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>
