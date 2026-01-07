import { computed, ref, watchEffect } from "#imports";
import { useQuery, useRouteQuery } from "#imports";
import { storeToRefs } from "#imports";
import { type BetEntity, getBetsApi, getTotalBetsApi } from "~/entities/bet";
import { toBetMapper } from "~/entities/bet/api/to-bet.mapper";
import { useFullStatsBetsStore } from "~/widgets/full-stats/model/full-stats-bets.store";
import { type Ref, watch } from "vue";

const ITEMS_PER_PAGE = 9;

const QUERY_KEYS = {
  BETS: "bets",
  BETS_TOTAL: "bets-total",
} as const;

interface UseFullStatsBetsReturn {
  bets: Ref<BetEntity[]>;
  statusOfBets: Ref<string>;
  currentPage: Ref<number>;
  itemsPerPage: number;
  total: Ref<number>;
  statusOfTotal: Ref<string>;
  changePage: (page: number) => void;
  applyFilters: (filters: object) => void;
}

export function useFullStatsBets(): UseFullStatsBetsReturn {
  const betsStore = useFullStatsBetsStore();

  const { bets, total } = storeToRefs(betsStore);

  const currentPage = useRouteQuery("page", 1, { transform: Number });
  const currentFilters = ref<object>({});

  const queryParameters = computed(() => ({
    fields: "*.*",
    limit: ITEMS_PER_PAGE,
    sort: "-date_updated",
    page: currentPage.value,
    filter: currentFilters.value,
  }));

  const { data: betsData, status: statusOfBets } = useQuery({
    key: () => [QUERY_KEYS.BETS, { ...queryParameters.value }],
    query: () => getBetsApi(queryParameters),
    enabled: import.meta.client,
    placeholderData: (previousData) => previousData,
  });

  watchEffect(() => {
    if (betsData.value?.data) {
      const mappedBets = betsData.value.data.map(toBetMapper);

      betsStore.setBets(mappedBets);
    }
  });

  const { data: totalData, status: statusOfTotal } = useQuery({
    key: () => [QUERY_KEYS.BETS_TOTAL, { ...currentFilters.value }],
    query: () => getTotalBetsApi({ filter: currentFilters.value }),
    enabled: import.meta.client,
    placeholderData: (previousData) => previousData,
  });

  watch(
    () => totalData.value?.data?.[0]?.count,
    (newCount) => {
      if (newCount !== undefined && typeof newCount === "number") {
        total.value = newCount;
      }
    },
  );

  function applyFilters(filters: object) {
    changePage(1);
    currentFilters.value = filters;
  }

  function changePage(page: number) {
    currentPage.value = page;
  }

  return {
    bets,
    statusOfBets,
    currentPage,
    itemsPerPage: ITEMS_PER_PAGE,
    total,
    statusOfTotal,
    changePage,
    applyFilters,
  };
}
