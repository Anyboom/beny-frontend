import { computed, defineStore, reactive } from "#imports";
import type { TeamEntity } from "~/entities/team";
import type { CompetitionEntity } from "~/entities/competition";
import type { ForecastEntity } from "~/entities/forecast";

export type StatsFilters = {
  homeTeam?: TeamEntity;
  guestTeam?: TeamEntity;
  competition?: CompetitionEntity;
  forecasts?: ForecastEntity;
};

export const useFullStatsFiltersStore = defineStore("full-stats-filters", () => {
  const filters = reactive<StatsFilters>({
    homeTeam: undefined,
    guestTeam: undefined,
    competition: undefined,
    forecasts: undefined,
  });

  const serializedFilters = computed(() => {
    const result: Record<string, object> = {};

    if (filters.homeTeam) {
      result["home_team"] = {
        id: filters.homeTeam.id,
      };
    }

    if (filters.guestTeam) {
      result["guest_team"] = {
        id: filters.guestTeam.id,
      };
    }

    if (filters.competition) {
      result["competition"] = {
        id: filters.competition.id,
      };
    }

    if (filters.forecasts) {
      result["forecast"] = {
        id: filters.forecasts.id,
      };
    }

    return result;
  });

  return {
    serializedFilters,
    filters,
  };
});
