import { computed, ref, watchEffect } from "#imports";
import { useQuery, useRouteQuery } from "#imports";
import { storeToRefs } from "#imports";
import { type BetEntity, getBetsApi, getTotalBetsApi } from "~/entities/bet";
import { toBetMapper } from "~/entities/bet/api/to-bet.mapper";
import { useFullStatsFiltersStore } from "~/widgets/full-stats/model/full-stats-filters.store";
import { useFullStatsBetsStore } from "~/widgets/full-stats/model/full-stats-bets.store";
import type { Ref } from "vue";

const ITEMS_PER_PAGE = 1;

const QUERY_KEYS = {
  BETS: "bets",
  BETS_TOTAL: "bets-total",
} as const;

interface UseFullStatsReturn {
  filters: Ref<object>;
  bets: Ref<BetEntity[]>;
  currentPage: Ref<number>;
  itemsPerPage: number;
  total: Ref<number>;
  statusOfTotal: Ref<string>;
  changePage: (page: number) => void;
}

export function useFullStats(): UseFullStatsReturn {
  const filtersStore = useFullStatsFiltersStore();
  const betsStore = useFullStatsBetsStore();

  const { filters } = storeToRefs(filtersStore);
  const { bets } = storeToRefs(betsStore);

  const currentPage = useRouteQuery("page", 1, { transform: Number });
  const total = ref<number>(0);

  const queryParameters = computed(() => ({
    fields: "*.*",
    limit: ITEMS_PER_PAGE,
    sort: "-date_updated",
    page: currentPage.value,
  }));

  const { data: betsData } = useQuery({
    key: () => [QUERY_KEYS.BETS, currentPage.value],
    query: () => getBetsApi(queryParameters),
    enabled: import.meta.client,
  });

  watchEffect(() => {
    if (betsData.value?.data?.length) {
      const mappedBets = betsData.value.data.map(toBetMapper);

      betsStore.setBets(mappedBets);
    }
  });

  const { data: totalData, status: statusOfTotal } = useQuery({
    key: [QUERY_KEYS.BETS_TOTAL],
    query: getTotalBetsApi,
    enabled: import.meta.client,
  });

  watchEffect(() => {
    const count = totalData.value?.data?.[0]?.count;

    if (count !== undefined && typeof count === "number") {
      total.value = count;
    }
  });

  function changePage(page: number) {
    currentPage.value = page;
  }

  return {
    filters,
    bets,
    currentPage,
    itemsPerPage: ITEMS_PER_PAGE,
    total,
    statusOfTotal,
    changePage,
  };
}
