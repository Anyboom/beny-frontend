import { defineStore, useRouteQuery } from "#imports";
import { ref } from "vue";
import type { BetEntity } from "~/entities/bet";

export const useFullStatsBetsStore = defineStore("full-stats-bets", () => {
  const bets = ref<BetEntity[]>([]);
  const total = ref<number>(0);
  const page = useRouteQuery("page", 1, { transform: Number });
  const filters = ref<object>({});

  function updateBets(data: BetEntity[]) {
    bets.value = data;
  }

  function updateTotal(newTotal: number) {
    total.value = newTotal;
  }

  function updatePage(newPage: number) {
    page.value = newPage;
  }

  function updateFilters(newFilters: object) {
    filters.value = newFilters;
  }

  return {
    bets,
    total,
    page,
    filters,
    updateBets,
    updateTotal,
    updatePage,
    updateFilters,
  };
});
