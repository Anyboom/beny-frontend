<script setup lang="ts">
  import { AppHeader } from "~/widgets/header";
  import { WhyTrustUs } from "~/widgets/why-trust-us";
  import { ClickBait } from "~/widgets/click-bait";
  import { OftenAsk } from "~/widgets/ofter-ask";
  import { AboutUs } from "~/widgets/about-us";
  import { HalfStats } from "~/widgets/half-stats";
  import { MainBanner } from "~/widgets/main-banner";
  import { PersonalForecast } from "~/widgets/personal-forecast";
  import { AppFooter } from "~/widgets/footer";
  import { definePageMeta } from "#imports";
  import { useRoute } from "#app";
  import type { Component } from "vue";

  const blocks: Record<string, Component> = {
    'block_header': AppHeader,
    'block_why_trust_us': WhyTrustUs,
    'block_click_bait': ClickBait,
    'block_often_ask': OftenAsk,
    'block_about_us': AboutUs,
    'block_half_stats': HalfStats,
    'block_main_banner': MainBanner,
    'block_personal_forecast': PersonalForecast,
    'block_footer': AppFooter,
  }

  definePageMeta({
    middleware: 'resolve-route'
  });

  const route = useRoute() as any;

  const dynamicBlocks = route?.["meta"]?.["pageData"]?.["data"]?.["blocks"] as any[];
</script>

<template>
  <component :is="blocks[block.collection]" :key="block.id" v-for="block in dynamicBlocks"></component>
</template>

<style scoped></style>
