<script setup lang="ts">
  import DynamicComponent from "~/pages/dynamic-page/ui/DynamicComponent.vue";
  import { onMounted } from "vue";
  import { apply } from "@directus/visual-editing";
  import { createError, useRoute } from "#app";
  import type { Page } from "~/pages/dynamic-page/model/page.interface";

  const route = useRoute();

  const page: Page = route?.["meta"]?.["pageData"] as Page;

  if (page?.matched) {
    console.log(`Загружена страница ${page.title} по адресу - ${page.slug}`);
  } else {
    throw createError({
      statusCode: 404,
      statusMessage: "Страница не найдена",
    });
  }

  onMounted(() => apply({ directusUrl: "https://directus.localhost" }));
</script>

<template>
  <DynamicComponent
    v-for="(block, index) of page.blocks"
    :key="index"
    :block="block"
  />
</template>
