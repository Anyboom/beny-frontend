import { defineStore } from "#imports";
import { ref } from "vue";

export const useFullStatsBetsStore = defineStore("full-stats-bets", () => {
  const page = ref<number>(1);
  const filters = ref<object>({});

  function updatePage(newPage: number) {
    page.value = newPage;
  }

  function updateFilters(newFilters: object) {
    filters.value = newFilters;
  }

  return {
    page,
    filters,
    updatePage,
    updateFilters,
  };
});
