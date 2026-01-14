<script setup lang="ts">
  import type { NuxtError } from "#app";
  import { AppButton } from "~/shared/ui/AppButton";
  import { computed } from "#imports";

  interface Props {
    error: NuxtError;
  }

  type Error = {
    title: string;
    caption: string;
  };

  const errors: Record<string, Error> = {
    404: {
      title: "Страница не найдена",
      caption:
        "К сожалению, страница, которую вы ищете, не найдена. Возможно, она была перемещена, удалена или ссылка ведет не туда.",
    },
    "default": {
      title: "Что-то пошло не так...",
      caption: "Произошла непредвиденная ошибка. Не волнуйтесь, это не ваша вина.",
    },
  };

  const { error } = defineProps<Props>();

  const currentError = computed(() => {
    if (errors?.[error.statusCode]) {
      return errors[error.statusCode] as Error;
    }

    return errors.default as Error;
  });
</script>

<template>
  <NuxtLayout name="error">
    <div class="error">
      <h1 class="error__title">
        {{ currentError.title }}
      </h1>
      <span class="error__caption">
        {{ currentError.caption }}
      </span>
      <AppButton class="error__button">Вернуться на главную</AppButton>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;

  .error {
    max-width: $spacing-16 * 4;
    display: flex;
    flex-direction: column;
    gap: $spacing-2;

    &__title {
      @include apply-text("heading-1");
    }

    &__caption {
      @include apply-text("body");
    }

    &__button {
      width: fit-content;
    }
  }
</style>
