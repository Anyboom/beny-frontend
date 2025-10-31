<script setup lang="ts">
  interface AppSkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
  }

  const { height = "100%", width = "100%", borderRadius = undefined } = defineProps<AppSkeletonProps>();
</script>

<template>
  <div
    class="app-skeleton"
    :style="{
      width: width,
      height: height,
      borderRadius: borderRadius,
    }"
  ></div>
</template>

<style scoped>
  .app-skeleton {
    background-color: #e0e0e0;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: shimmer 1.5s infinite;
    }
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
</style>
