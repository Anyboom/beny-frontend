<script setup lang="ts">
  import type { Block } from "~/pages/dynamic-page/model/block.interface";
  import { computed } from "#imports";
  import { BlocksRepository } from "~/pages/dynamic-page/model/blocks.repository";

  interface DynamicComponentProps {
    block: Block;
  }

  const { block } = defineProps<DynamicComponentProps>();

  const instanceBlock = computed(() => BlocksRepository.get(block.collection));

  const component = computed(() => instanceBlock.value.component);
</script>

<template>
  <component
    :is="component"
    v-bind="block"
  />
</template>
