<script setup lang="ts">
  import type { Block } from "~/pages/dynamic-page/model/block.interface";
  import { computed } from "#imports";
  import { BlocksRepository } from "~/pages/dynamic-page/model/blocks.repository";

  interface Props {
    block: Block;
  }

  const { block } = defineProps<Props>();

  const instanceBlock = computed(() => BlocksRepository.get(block.collection));

  const componentModule = instanceBlock.value.component();
  const component = componentModule instanceof Promise ? (await componentModule).default : componentModule;
</script>

<template>
  <component
    :is="component"
    v-bind="block"
  />
</template>
