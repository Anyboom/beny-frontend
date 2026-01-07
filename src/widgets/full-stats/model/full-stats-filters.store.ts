import { computed, defineStore } from "#imports";
import type { TeamEntity } from "~/entities/team";
import type { CompetitionEntity } from "~/entities/competition";
import type { ForecastEntity } from "~/entities/forecast";
import { BetStatusEnum } from "~/entities/bet";
import { ref } from "vue";

export type StatsFilters = {
  statuses: Record<BetStatusEnum, boolean>;
  homeTeam?: TeamEntity;
  guestTeam?: TeamEntity;
  competition?: CompetitionEntity;
  forecasts?: ForecastEntity;
};

export const useFullStatsFiltersStore = defineStore("full-stats-filters", () => {
  const initFilters = {
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
  };

  const filters = ref<StatsFilters>(initFilters);

  const serializedFilters = computed(() => {
    const result: Record<string, object> = {};

    if (filters.value.homeTeam) {
      result["home_team"] = {
        id: filters.value.homeTeam.id,
      };
    }

    if (filters.value.guestTeam) {
      result["guest_team"] = {
        id: filters.value.guestTeam.id,
      };
    }

    if (filters.value.competition) {
      result["competition"] = {
        id: filters.value.competition.id,
      };
    }

    if (filters.value.forecasts) {
      result["forecast"] = {
        id: filters.value.forecasts.id,
      };
    }

    const selectedStatuses = Object.entries(filters.value.statuses)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    if (selectedStatuses.length > 0) {
      result["status"] = {
        "_in": selectedStatuses,
      };
    }

    return result;
  });

  function $reset() {
    filters.value = initFilters;
  }

  return {
    serializedFilters,
    filters,
    $reset,
  };
});
