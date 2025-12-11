<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
  import { revalidateLogic, useForm } from "@tanstack/vue-form";
  import { personalForecastSchema } from "~/features/personal-forecast/model/personal-forecast.schema";
  import { createForecastApi } from "~/features/personal-forecast/api/create-forecast.api";
  import { useNuxtApp } from "#app";
  import { AppInput } from "~/shared/ui/AppInput";
  import { AppTextarea } from "~/shared/ui/AppTextarea";

  const { $toast } = useNuxtApp();

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
        $toast("Форма успешно отправлена", {
          "type": "success",
        });
      } catch {
        $toast("Не получилось отправить форму", {
          "type": "error",
        });
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
          <AppInput
            :id="field.name"
            :name="field.name"
            :value="state.value"
            @input="(e: Event) => field.handleChange((e.target as HTMLInputElement).value)"
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
          <AppInput
            :id="field.name"
            :value="state.value"
            :name="field.name"
            @input="(e: Event) => field.handleChange((e.target as HTMLInputElement).value)"
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
          <AppInput
            :id="field.name"
            :value="state.value"
            :name="field.name"
            @input="(e: Event) => field.handleChange((e.target as HTMLInputElement).value)"
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
          <AppTextarea
            :id="field.name"
            :value="state.value"
            :name="field.name"
            @input="(e: Event) => field.handleChange((e.target as HTMLInputElement).value)"
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
  @use "@/shared/assets/styles/typography" as *;

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
      @include apply-text("caption-small");
      color: $color-text-error;
    }

    &__label {
      font-weight: 700;
      color: $color-text;
      width: fit-content;

      @include apply-text("label");
    }

    &__buttons {
      padding: $spacing-2 0;
      text-align: right;
    }
  }
</style>
