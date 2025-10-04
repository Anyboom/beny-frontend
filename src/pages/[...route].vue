<script setup lang="ts">
  import { definePageMeta } from "#imports";
  import { useRoute } from "#app";
  import { type Block, DynamicPage } from "~/shared/lib/dynamic-page";

  definePageMeta({
    middleware: "resolve-route",
  });

  const route = useRoute() as any;

  const blocks: Block[] = route?.["meta"]?.["pageData"]?.["data"]?.["blocks"];
</script>

<template>
  <DynamicPage :blocks="blocks" />
</template>
