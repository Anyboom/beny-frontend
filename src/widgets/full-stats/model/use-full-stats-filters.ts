import { ref } from "vue";
import { getTeamsApi, type TeamEntity, toTeamMapper } from "~/entities/team";
import { type CompetitionEntity, getCompetitionsApi, toCompetitionMapper } from "~/entities/competition";
import { type ForecastEntity, getForecastsApi, toForecastMapper } from "~/entities/forecast";
import { computed, useQuery, watchEffect } from "#imports";

const QUERY_KEYS = {
  TEAMS: "teams",
  FORECASTS: "forecasts",
  COMPETITIONS: "competitions",
} as const;

export function useFullStatsFilters() {
  const teams = ref<TeamEntity[]>([]);
  const forecasts = ref<CompetitionEntity[]>([]);
  const competitions = ref<ForecastEntity[]>([]);

  const { data: teamsData, status: statusOfTeams } = useQuery({
    key: [QUERY_KEYS.TEAMS],
    query: getTeamsApi,
    enabled: import.meta.client,
  });

  const { data: forecastsData, status: statusOfForecasts } = useQuery({
    key: [QUERY_KEYS.FORECASTS],
    query: getForecastsApi,
    enabled: import.meta.client,
  });

  const { data: competitionsData, status: statusOfCompetitions } = useQuery({
    key: [QUERY_KEYS.COMPETITIONS],
    query: getCompetitionsApi,
    enabled: import.meta.client,
  });

  watchEffect(() => {
    if (teamsData.value?.data?.length) {
      teams.value = teamsData.value.data.map(toTeamMapper);
    }
  });

  watchEffect(() => {
    if (forecastsData.value?.data?.length) {
      forecasts.value = forecastsData.value.data.map(toForecastMapper);
    }
  });

  watchEffect(() => {
    if (competitionsData.value?.data?.length) {
      competitions.value = competitionsData.value.data.map(toCompetitionMapper);
    }
  });

  const isLoading = computed(() => {
    return [statusOfTeams.value, statusOfForecasts.value, statusOfCompetitions.value].some((status) =>
      ["loading", "pending"].includes(status),
    );
  });

  const isLoaded = computed(() => !isLoading.value);

  return {
    teams,
    forecasts,
    competitions,
    statusOfTeams,
    statusOfForecasts,
    statusOfCompetitions,
    isLoading,
    isLoaded,
  };
}
