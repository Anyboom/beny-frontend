import { pathDirectus } from "~/shared/api/path-directus";
import type { TeamDTO } from "../model/team.dto";
import { toTeamMapper } from "./to-team.mapper";

export async function getTeamsApi() {
  const response = await $fetch<{ data: TeamDTO[] }>(`${pathDirectus}/items/teams`);

  return response.data.map((team: TeamDTO) => toTeamMapper(team));
}
