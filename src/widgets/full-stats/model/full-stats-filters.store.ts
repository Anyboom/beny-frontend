import { defineStore, reactive } from "#imports";

export const useFullStatsFiltersStore = defineStore("full-stats-filters", () => {
  const filters = reactive({
    homeTeam: undefined,
    guestTeam: undefined,
    competition: undefined,
    forecasts: undefined,
  });

  return {
    filters,
  };
});
