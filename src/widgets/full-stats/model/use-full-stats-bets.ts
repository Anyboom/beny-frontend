import { computed } from "#imports";
import { useQuery } from "#imports";
import { storeToRefs } from "#imports";
import { type BetEntity, getBetsApi, getTotalBetsApi } from "~/entities/bet";
import { toBetMapper } from "~/entities/bet/api/to-bet.mapper";
import { useFullStatsBetsStore } from "~/widgets/full-stats/model/full-stats-bets.store";
import { type Ref } from "vue";

const ITEMS_PER_PAGE = 9;

const QUERY_KEYS = {
  BETS: "bets",
  BETS_TOTAL: "bets-total",
} as const;

interface UseFullStatsBetsReturn {
  bets: Ref<BetEntity[] | undefined>;
  statusOfBets: Ref<string>;
  page: Ref<number>;
  itemsPerPage: number;
  total: Ref<number | undefined>;
  statusOfTotal: Ref<string>;
  updatePage: (newPage: number) => void;
  updateFilters: (newFilters: object) => void;
}

export function useFullStatsBets(): UseFullStatsBetsReturn {
  const betsStore = useFullStatsBetsStore();

  const { page, filters } = storeToRefs(betsStore);

  const queryParameters = computed(() => ({
    fields: "*.*",
    limit: ITEMS_PER_PAGE,
    sort: "-date_updated",
    page: page.value,
    filter: filters.value,
  }));

  const { data: bets, status: statusOfBets } = useQuery({
    key: () => [QUERY_KEYS.BETS, { ...queryParameters.value }],
    query: async () => {
      const response = await getBetsApi(queryParameters);

      return response.data.map(toBetMapper);
    },
    enabled: import.meta.client,
    placeholderData: (previousData) => previousData,
  });

  const { data: total, status: statusOfTotal } = useQuery({
    key: () => [QUERY_KEYS.BETS_TOTAL, { ...filters.value }],
    query: async () => {
      const response = await getTotalBetsApi({ filter: filters.value });

      return response?.data?.[0]?.count;
    },
    enabled: import.meta.client,
    placeholderData: (previousData) => previousData,
  });

  return {
    bets,
    statusOfBets,
    page,
    itemsPerPage: ITEMS_PER_PAGE,
    total,
    statusOfTotal,
    updatePage: betsStore.updatePage,
    updateFilters: betsStore.updateFilters,
  };
}
