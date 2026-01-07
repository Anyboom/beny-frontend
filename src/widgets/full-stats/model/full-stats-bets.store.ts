import { defineStore, useRouteQuery } from "#imports";
import { type MaybeRefOrGetter, ref, toValue } from "vue";
import type { BetEntity } from "~/entities/bet";
import { set } from "@vueuse/core";

export const useFullStatsBetsStore = defineStore("full-stats-bets", () => {
  const bets = ref<BetEntity[]>([]);
  const total = ref<number>(0);
  const currentPage = useRouteQuery("page", 1, { transform: Number });
  const currentFilters = ref<object>({});

  function setBets(data: MaybeRefOrGetter<BetEntity[]>) {
    set(bets, toValue(data));
  }

  return {
    bets,
    setBets,
    total,
    currentPage,
    currentFilters,
  };
});
