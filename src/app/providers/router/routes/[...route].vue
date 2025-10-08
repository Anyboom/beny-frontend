<script setup lang="ts">
  import { definePageMeta } from "#imports";
  import { DynamicPage } from "~/shared/lib/dynamic-page";

  definePageMeta({
    middleware: "resolve-route",
  });
</script>

<template>
  <DynamicPage />
</template>
