<script setup lang="ts">
  import type { NuxtError } from "#app";

  interface ErrorProps {
    error: NuxtError;
  }

  defineProps<ErrorProps>();
</script>

<template>
  <span>{{ error.statusCode }}</span>
  <span>Ошибка</span>
</template>

<style scoped lang="scss"></style>
