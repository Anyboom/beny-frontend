<script setup lang="ts">
  import { useId } from "#imports";
  import { AppButton } from "~/shared/ui/AppButton";
  import { useForm } from "~/shared/composables/use-form";
  import { personalForecastSchema } from "~/features/personal-forecast/model/personal-forecast.schema";

  const ids = {
    name: useId(),
    communicationMethod: useId(),
    coefficient: useId(),
    message: useId(),
  };

  const { handleSubmit, values, errors, reset } = useForm({
    schema: personalForecastSchema,
    initialValues: {
      name: "",
      coefficient: "",
      communicationMethod: "",
      message: "",
    },
  });

  function onSubmit() {
    reset();
  }
</script>

<template>
  <form @submit.prevent="handleSubmit(onSubmit)" class="personal-forecast-form">
    <div class="personal-forecast-form__group">
      <label class="personal-forecast-form__label" :for="ids.name">Имя</label>
      <input class="personal-forecast-form__input" v-model="values.name" type="text" :id="ids.name" />
      <span class="personal-forecast-form__error" v-show="errors.name">{{ errors.name }}</span>
    </div>
    <div class="personal-forecast-form__group">
      <label class="personal-forecast-form__label" :for="ids.communicationMethod">Способ связи</label>
      <input
        class="personal-forecast-form__input"
        v-model="values.communicationMethod"
        type="text"
        :id="ids.communicationMethod"
      />
      <span class="personal-forecast-form__error" v-show="errors.communicationMethod">
        {{ errors.communicationMethod }}
      </span>
    </div>
    <div class="personal-forecast-form__group">
      <label class="personal-forecast-form__label" :for="ids.coefficient">Желаемый коэффициент</label>
      <input class="personal-forecast-form__input" v-model="values.coefficient" type="text" :id="ids.coefficient" />
      <span class="personal-forecast-form__error" v-show="errors.coefficient">
        {{ errors.coefficient }}
      </span>
    </div>
    <div class="personal-forecast-form__group">
      <label class="personal-forecast-form__label" :for="ids.message">Комментарий</label>
      <textarea class="personal-forecast-form__textarea" v-model="values.message" rows="15" :id="ids.message" />
      <span class="personal-forecast-form__error" v-show="errors.message">
        {{ errors.message }}
      </span>
    </div>
    <div class="personal-forecast-form__buttons">
      <AppButton> Отправить </AppButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;

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
