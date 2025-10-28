<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
  import { revalidateLogic, useForm } from "@tanstack/vue-form";
  import { personalForecastSchema } from "~/features/personal-forecast/model/personal-forecast.schema";
  import { createForecastApi } from "~/features/personal-forecast/api/create-forecast.api";

  const form = useForm({
    defaultValues: {
      name: "",
      coefficient: "",
      communicationMethod: "",
      message: "",
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: personalForecastSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        await createForecastApi(value);
      } finally {
        formApi.reset();
      }
    },
  });
</script>

<template>
  <form
    class="personal-forecast-form"
    @submit="
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }
    "
  >
    <form.Field name="name">
      <template #default="{ field, state }">
        <div class="personal-forecast-form__group">
          <label
            class="personal-forecast-form__label"
            :for="field.name"
          >
            Имя
          </label>
          <input
            :id="field.name"
            class="personal-forecast-form__input"
            type="text"
            :name="field.name"
            :value="state.value"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <span
            v-if="!field.state.meta.isValid && field?.state?.meta?.errors?.at(0)"
            class="personal-forecast-form__error"
          >
            {{ field.state.meta.errors.at(0)?.message }}
          </span>
        </div>
      </template>
    </form.Field>
    <form.Field name="communicationMethod">
      <template #default="{ field, state }">
        <div class="personal-forecast-form__group">
          <label
            class="personal-forecast-form__label"
            :for="field.name"
          >
            Способ связи
          </label>
          <input
            :id="field.name"
            class="personal-forecast-form__input"
            type="text"
            :value="state.value"
            :name="field.name"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <span
            v-if="!field.state.meta.isValid && field?.state?.meta?.errors?.at(0)"
            class="personal-forecast-form__error"
          >
            {{ field.state.meta.errors.at(0)?.message }}
          </span>
        </div>
      </template>
    </form.Field>
    <form.Field name="coefficient">
      <template #default="{ field, state }">
        <div class="personal-forecast-form__group">
          <label
            class="personal-forecast-form__label"
            :for="field.name"
          >
            Желаемый коэффициент
          </label>
          <input
            :id="field.name"
            class="personal-forecast-form__input"
            type="text"
            :value="state.value"
            :name="field.name"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <span
            v-if="!field.state.meta.isValid && field?.state?.meta?.errors?.at(0)"
            class="personal-forecast-form__error"
          >
            {{ field.state.meta.errors.at(0)?.message }}
          </span>
        </div>
      </template>
    </form.Field>
    <form.Field name="message">
      <template #default="{ field, state }">
        <div class="personal-forecast-form__group">
          <label
            class="personal-forecast-form__label"
            :for="field.name"
          >
            Комментарий
          </label>
          <textarea
            :id="field.name"
            class="personal-forecast-form__textarea"
            rows="15"
            :value="state.value"
            :name="field.name"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          ></textarea>
          <span
            v-if="!field.state.meta.isValid && field?.state?.meta?.errors?.at(0)"
            class="personal-forecast-form__error"
          >
            {{ field.state.meta.errors.at(0)?.message }}
          </span>
        </div>
      </template>
    </form.Field>
    <form.Subscribe>
      <template #default="{ isSubmitting }">
        <div class="personal-forecast-form__buttons">
          <AppButton :disabled="isSubmitting"> Отправить </AppButton>
        </div>
      </template>
    </form.Subscribe>
  </form>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/variables" as *;

  .personal-forecast-form {
    display: flex;
    flex-direction: column;
    gap: $spacing-1;
    &__group {
      display: flex;
      flex-direction: column;
      gap: $spacing-1;
    }

    &__error {
      font-size: 12px;
      color: $color-text-error;
    }

    &__label {
      font-size: 14px;
      font-weight: 700;
      color: $color-text;
      width: fit-content;
    }

    &__input,
    &__textarea {
      background: $color-default-white;
      color: $color-text;
      font-size: 12px;
      border-radius: $spacing-1;
      padding: $spacing-2;

      &:focus {
        outline: 2px solid $color-accent;
      }

      &::placeholder {
        color: $color-placeholder;
      }
    }

    &__textarea {
      resize: none;
    }

    &__buttons {
      padding: $spacing-2 0;
      text-align: right;
    }
  }
</style>
