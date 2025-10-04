<script setup lang="ts">
  import type { Block } from "~/shared/lib/dynamic-page/model/block.interface";
  import { computed } from "#imports";
  import { BlocksRepository } from "~/app/blocks/blocks.repository";

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
