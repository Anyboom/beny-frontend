<script setup lang="ts">
  import { definePageMeta } from "#imports";
  import { useRoute } from "#app";
  import { BlocksRepository } from "~/app/blocks/blocks.repository";

  definePageMeta({
    middleware: "resolve-route",
  });

  const route = useRoute() as any;

  const dynamicBlocks = route?.["meta"]?.["pageData"]?.["data"]?.["blocks"] as any;
</script>

<template>
  <component
    :is="BlocksRepository.get(block.collection).component"
    v-bind="block"
    :key="block.id"
    v-for="block in dynamicBlocks"
  />
</template>

<style scoped></style>
