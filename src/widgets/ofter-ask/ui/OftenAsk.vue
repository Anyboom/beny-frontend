<script setup lang="ts">
  import { AppAccordion } from "~/shared/ui/AppAccordion";

  const items = [
    {
      title: "Качество",
      text: "Наши прогнозы основаны на глубоком анализе статистики, формы команд и внутренних факторов.",
    },
    {
      title: "Прозрачность и честность",
      text: "Мы публикуем все результаты — как удачные, так и неудачные ставки.",
    },
    {
      title: "Оперативность и актуальность",
      text: "Мы публикуем прогнозы заранее, с учётом последних новостей и коэффициентов.",
    },
    {
      title: "Оперативность и актуальность",
      text: "Мы публикуем прогнозы заранее, с учётом последних новостей и коэффициентов.",
    },
    {
      title: "Оперативность и актуальность",
      text: "Мы публикуем прогнозы заранее, с учётом последних новостей и коэффициентов.",
    },
    {
      title: "Оперативность и актуальность",
      text: "Мы публикуем прогнозы заранее, с учётом последних новостей и коэффициентов.",
    },
  ];
</script>

<template>
  <section class="often-ask" id="often-ask">
    <div class="container">
      <div class="often-ask__wrapper">
        <h2 class="often-ask__title">Часто спрашивают</h2>
        <div class="often-ask__items">
          <app-accordion v-for="(item, index) in items" :key="index">
            <template #title>
              {{ item.title }}
            </template>
            <template #default>
              {{ item.text }}
            </template>
          </app-accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/typography" as *;
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .often-ask {
    margin-bottom: $spacing-8;
    &__title {
      @include heading-h2;
      color: $color-text;
      margin-bottom: $spacing-2;
    }

    &__items {
      display: grid;
      gap: $spacing-2;
      grid-template-columns: repeat(2, 1fr);

      @include view-port-sm {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>
