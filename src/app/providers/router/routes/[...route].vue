<script setup lang="ts">
  import { definePageMeta } from "#imports";
  import { DynamicPage } from "~/pages/dynamic-page";

  definePageMeta({
    middleware: "dynamic-page",
  });
</script>

<template>
  <DynamicPage />
</template>
