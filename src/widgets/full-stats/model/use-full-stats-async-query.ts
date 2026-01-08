import { useRoute, useRouter } from "#app";
import { onMounted, watch } from "vue";
import { nextTick, storeToRefs } from "#imports";
import { useFullStatsBetsStore } from "~/widgets/full-stats/model/full-stats-bets.store";
import { useFullStatsFiltersStore } from "~/widgets/full-stats/model/full-stats-filters.store";

export function useFullStatsAsyncQuery() {
  const router = useRouter();
  const route = useRoute();

  const fullStatsBetsStore = useFullStatsBetsStore();
  const fullStatsFiltersStore = useFullStatsFiltersStore();

  const { page } = storeToRefs(fullStatsBetsStore);
  const { filters, serializedFilters } = storeToRefs(fullStatsFiltersStore);

  async function setQuery(parameters: object) {
    await nextTick();

    await router.replace({
      path: route.path,
      query: {
        ...route.query,
        ...parameters,
      },
    });
  }

  onMounted(() => {
    if (route?.query?.filters && typeof route.query.filters == "string") {
      try {
        const filters = JSON.parse(route.query.filters);
        fullStatsFiltersStore.updateFilters(filters);
        fullStatsBetsStore.updateFilters(serializedFilters.value);
      } catch {
        console.error("Ошибка парсинга query-параметра: filters");
      }
    }

    if (route?.query?.page && typeof route.query.page == "string") {
      try {
        const page = Number(route.query.page);
        fullStatsBetsStore.updatePage(page);
      } catch {
        console.error("Ошибка парсинга query-параметра: page");
      }
    }
  });

  watch(page, (newPage) => setQuery({ page: newPage }));
  watch(filters, (newFilters) => setQuery({ filters: JSON.stringify(newFilters) }), { deep: true });
}
