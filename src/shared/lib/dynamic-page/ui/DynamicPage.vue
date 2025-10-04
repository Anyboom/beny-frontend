<script setup lang="ts">
  import type { Block } from "~/shared/lib/dynamic-page/model/block.interface";
  import DynamicComponent from "~/shared/lib/dynamic-page/ui/DynamicComponent.vue";

  interface DynamicPageProps {
    blocks: Block[];
  }

  defineProps<DynamicPageProps>();
</script>

<template>
  <DynamicComponent
    v-for="block of blocks"
    :key="block.id"
    :block="block"
  />
</template>
