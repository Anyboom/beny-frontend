<script setup lang="ts">
  import DynamicComponent from "~/pages/dynamic-page/ui/DynamicComponent.vue";
  import { onMounted } from "vue";
  import { apply } from "@directus/visual-editing";
  import { createError, useHead, useRoute } from "#app";
  import type { Page } from "~/pages/dynamic-page/model/page.interface";

  const route = useRoute();

  const currentPage: Page | undefined = route?.["meta"]?.["currentPage"] as Page | undefined;

  if (currentPage == undefined) {
    throw createError({
      statusCode: 500,
      statusMessage: "Не получилось получить страницу",
    });
  }

  if (currentPage.matched) {
    console.log(`Загружена страница ${currentPage.title} по адресу - ${currentPage.slug}`);
  } else {
    throw createError({
      statusCode: 404,
      statusMessage: "Страница не найдена",
    });
  }

  onMounted(() => apply({ directusUrl: "https://directus.localhost" }));

  useHead({
    title: currentPage.title,
    meta: [{ name: "description", content: currentPage.description }],
  });
</script>

<template>
  <DynamicComponent
    v-for="(block, index) of currentPage?.blocks"
    :key="index"
    :block="block"
  />
</template>
