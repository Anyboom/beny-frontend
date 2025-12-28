import { pathDirectus } from "~/shared/api/path-directus";
import { toCompetitionMapper } from "./to-competition.mapper";
import type { CompetitionDTO } from "../model/competition.dto";

export async function getCompetitionsApi() {
  const response = await $fetch<{ data: CompetitionDTO[] }>(`${pathDirectus}/items/competitions`);

  return response.data.map((team: CompetitionDTO) => toCompetitionMapper(team));
}
