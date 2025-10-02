<script setup lang="ts">
  const items = [
    {
      title: "Качество",
      caption: "Наши прогнозы основаны на глубоком анализе статистики, формы команд и внутренних факторов.",
    },
    {
      title: "Прозрачность и честность",
      caption: "Мы публикуем все результаты — как удачные, так и неудачные ставки.",
    },
    {
      title: "Оперативность и актуальность",
      caption: "Мы публикуем прогнозы заранее, с учётом последних новостей и коэффициентов.",
    },
  ];
</script>

<template>
  <section class="why-trust-us" id="why-trust-us">
    <div class="container">
      <div class="why-trust-us__wrapper">
        <h2 class="why-trust-us__title">Почему нам доверяют</h2>
        <div class="why-trust-us__card-wrapper">
          <div class="why-trust-us__card" v-for="item in items" :key="item.title">
            <h3 class="why-trust-us__card-title">
              {{ item.title }}
            </h3>
            <p class="why-trust-us__card-caption">
              {{ item.caption }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/typography" as *;
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .why-trust-us {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__card {
      padding: $spacing-3;
      border-radius: $spacing-3;
      background: $color-white;
    }

    &__card-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-3;

      @include view-port-sm {
        grid-template-columns: repeat(2, 1fr);
      }

      @include view-port-xs {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__card-title {
      color: $color-text;
      font-weight: 600;
      margin-bottom: $spacing-2;
    }

    &__card-caption {
      color: #565963;
      font-size: 14px;
    }
  }
</style>
