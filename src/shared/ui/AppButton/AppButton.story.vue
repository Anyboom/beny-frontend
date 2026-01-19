<script setup>
  import { ref } from "vue";
  import { logEvent } from "histoire/client";
  import AppButton from "~/shared/ui/AppButton/AppButton.vue";

  const text = ref("Click me");
</script>

<template>
  <Story title="Кнопка">
    <Variant>
      <AppButton @click="logEvent('click', $event)">
        {{ text }}
      </AppButton>
    </Variant>
  </Story>
</template>
