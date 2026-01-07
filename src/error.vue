<script setup lang="ts">
  import type { NuxtError } from "#app";

  interface Props {
    error: NuxtError;
  }

  defineProps<Props>();
</script>

<template>
  {{ error }}
  <span>{{ error.statusCode }}</span>
  <span>Ошибка</span>
</template>

<style scoped lang="scss"></style>
