<script setup lang="ts"></script>

<template>
  <section class="about-us" id="about-us">
    <div class="container">
      <div class="about-us__wrapper">
        <div class="about-us__content">
          <h2 class="about-us__title">О нас</h2>
          <p class="about-us__paragraph">
            Мы — команда аналитиков, работающая с цифрами, а не догадками. Никаких "гарантированных побед" — только
            анализ статистики, тактики и коэффициентов. Так делают профессионалы, и мы не исключение.
          </p>
          <p class="about-us__paragraph">
            Честность — наш принцип. Все прогнозы публикуем "как есть", с открытым архивом удач и ошибок. Если данных
            недостаточно — честно пишем "без прогноза".
          </p>
          <p class="about-us__paragraph">
            Каждый разбор содержит проверяемые данные с источниками. Нужен трезвый подход к ставкам — вам к нам. Ждете
            чуда — это не про нас.
          </p>
        </div>
        <div class="about-us__image-wrapper">
          <div class="about-us__image">
            <svg class="about-us__icon" viewBox="0 0 43 45" width="43" height="45">
              <use href="@/assets/images/sprites.svg#logo"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/typography" as *;
  @use "@/assets/styles/mixins" as *;

  .about-us {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__content {
      padding-right: $spacing-4;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-2;

      @include view-port-sm {
        display: block;
      }
    }

    &__icon {
      fill: $color-white;
      width: 221px;
    }

    &__paragraph {
      color: $color-text;

      &:not(:last-of-type) {
        margin-bottom: $spacing-2;
      }
    }

    &__image {
      border-radius: $spacing-2;
      background: $color-accent;
      padding: $spacing-8 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &__image-wrapper {
      @include view-port-sm {
        display: none;
      }
    }
  }
</style>
