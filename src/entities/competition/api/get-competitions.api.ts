import { pathDirectus } from "~/shared/api/path-directus";
import type { CompetitionDTO } from "../model/competition.dto";

export async function getCompetitionsApi(): Promise<{ data: CompetitionDTO[] }> {
  return $fetch<{ data: CompetitionDTO[] }>(`${pathDirectus}/items/competitions`);
}
