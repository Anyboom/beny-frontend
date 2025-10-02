<script setup lang="ts">
  import { PersonalForecastForm } from "~/features/personal-forecast";
</script>

<template>
  <section class="personal-forecast" id="personal-forecast">
    <div class="container">
      <div class="personal-forecast__wrapper">
        <div class="personal-forecast__content">
          <h2 class="personal-forecast__title">Индивидуальный прогноз</h2>
          <p class="personal-forecast__paragraph">
            Мы — команда аналитиков, работающая с цифрами, а не догадками. Никаких "гарантированных побед" — только
            анализ статистики, тактики и коэффициентов. Так делают профессионалы, и мы не исключение.
          </p>
          <p class="personal-forecast__paragraph">
            Честность — наш принцип. Все прогнозы публикуем "как есть", с открытым архивом удач и ошибок. Если данных
            недостаточно — честно пишем "без прогноза".
          </p>
        </div>
        <div class="personal-forecast__form">
          <PersonalForecastForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/typography" as *;
  @use "@/assets/styles/mixins" as *;

  .personal-forecast {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-2;

      @include view-port-md {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__paragraph {
      color: $color-text;

      &:not(:last-of-type) {
        margin-bottom: $spacing-2;
      }
    }
  }
</style>
