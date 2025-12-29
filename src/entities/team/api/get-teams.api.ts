import { pathDirectus } from "~/shared/api/path-directus";
import type { TeamDTO } from "../model/team.dto";

export async function getTeamsApi(): Promise<{ data: TeamDTO[] }> {
  return $fetch<{ data: TeamDTO[] }>(`${pathDirectus}/items/teams`);
}
