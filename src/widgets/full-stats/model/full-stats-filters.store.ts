import { computed, defineStore, reactive } from "#imports";
import type { TeamEntity } from "~/entities/team";
import type { CompetitionEntity } from "~/entities/competition";
import type { ForecastEntity } from "~/entities/forecast";
import { BetStatusEnum } from "~/entities/bet";

export type StatsFilters = {
  statuses: Record<BetStatusEnum, boolean>;
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
    statuses: {
      [BetStatusEnum.lose]: false,
      [BetStatusEnum.pending]: false,
      [BetStatusEnum.win]: false,
      [BetStatusEnum.return]: false,
    },
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

    const selectedStatuses = Object.entries(filters.statuses)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    if (selectedStatuses.length > 0) {
      result["status"] = {
        "_in": selectedStatuses,
      };
    }

    return result;
  });

  return {
    serializedFilters,
    filters,
  };
});
